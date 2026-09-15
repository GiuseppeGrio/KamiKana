import { useState, useCallback, useEffect, useRef } from 'react';
import { allKana, Kana, elementChart, getWildKanaForArea } from './data/kana';
import { areas, Area } from './data/areas';
import { introDialogue, antagonistDialogues, victoryDialogues, areaDialogues, puzzleIntros, DialogueLine } from './data/dialogues';
import { puzzles, validateSolution } from './data/puzzles';
import GameScene from './components/GameScene';

type GameScreen = 'title' | 'intro' | 'explore' | 'battle' | 'dialogue' | 'puzzle' | 'team' | 'capture' | 'victory' | 'gameover' | 'codex';

interface PlayerKana extends Kana {
  currentHp: number;
  exp: number;
  expToNext: number;
}

interface BattleEnemy extends Kana {
  currentHp: number;
}

interface BattleState {
  playerKana: PlayerKana;
  enemyKana: BattleEnemy;
  isPlayerTurn: boolean;
  turn: number;
}

function createPlayerKana(kana: Kana): PlayerKana {
  return { ...kana, currentHp: kana.hp, exp: 0, expToNext: kana.level * 20 };
}

function levelUp(kana: PlayerKana): PlayerKana {
  const newLevel = kana.level + 1;
  return {
    ...kana,
    level: newLevel,
    hp: kana.hp + 5,
    currentHp: Math.min(kana.currentHp + 5, kana.hp + 5),
    attack: kana.attack + 3,
    defense: kana.defense + 2,
    speed: kana.speed + 2,
    exp: kana.exp - kana.expToNext,
    expToNext: newLevel * 25,
  };
}

// Extended dialogues for more content
const explorationEvents: DialogueLine[][] = [
  [
    { speaker: 'Viandante', text: 'Hai mai pensato che i kana siano come le parole di Dio? Ogni lettera è un atto creativo.' },
    { speaker: 'Viandante', text: 'Nel Vangelo di Giovanni: "Tutto è stato fatto per mezzo del Verbo". I kana sono quel Verbo.' },
  ],
  [
    { speaker: 'Monaco Errante', text: 'Il Buddha disse: "Non credere a nulla per il solo fatto che è stato detto." Verifica tu stesso.' },
    { speaker: 'Monaco Errante', text: 'I kana non sono ciò che sembrano. Sono vuoti di sé, pieni di possibilità.' },
  ],
  [
    { speaker: 'Mercante', text: 'Compro e vendo kana rari! Sai che alcuni kana valgono più di altri?' },
    { speaker: 'Mercante', text: 'Come nel capitalismo, il valore è determinato dalla domanda e dall\'offerta. Ma è giusto?' },
  ],
  [
    { speaker: 'Filosofo', text: 'Pensare, dunque sono. Ma i kana pensano? Se un kana cade in una foresta...' },
    { speaker: 'Filosofo', text: 'Cartesio dubitava di tutto. Ma non dubitava del dubbio stesso. Cogito ergo sum.' },
  ],
  [
    { speaker: 'Mistico Sufi', text: 'Rumi diceva: "Non sei una goccia nell\'oceano. Sei l\'intero oceano in una goccia."' },
    { speaker: 'Mistico Sufi', text: 'Ogni kana contiene l\'universo intero. Come il Indra\'s Net del Buddismo Avatamsaka.' },
  ],
  [
    { speaker: 'Rabbi Viaggiatore', text: 'Il Sefer Yetzirah insegna che Dio creò il mondo con 22 lettere. I kana sono la versione giapponese.' },
    { speaker: 'Rabbi Viaggiatore', text: 'Ogni combinazione di lettere crea un mondo diverso. Infinite possibilità.' },
  ],
  [
    { speaker: 'Samurai', text: 'Il Bushidō insegna: rettitudine, coraggio, benevolenza, rispetto, onore, lealtà, autocontrollo.' },
    { speaker: 'Samurai', text: 'Un vero allenatore di kana segue questi principi. La battaglia è una questione di spirito.' },
  ],
  [
    { speaker: 'Profeta', text: 'Come disse Zarathustra: "L\'uomo è una corda tesa tra la bestia e l\'oltreuomo".' },
    { speaker: 'Profeta', text: 'I kana sono la corda. Tu sei colui che la tende. Verso quale direzione?' },
  ],
  [
    { speaker: 'Anacoreta', text: 'Kierkegaard diceva che la vita può essere capita solo all\'indietro, ma va vissuta in avanti.' },
    { speaker: 'Anacoreta', text: 'Ogni battaglia è un salto nella fede. Un "leap of faith" verso l\'ignoto.' },
  ],
  [
    { speaker: 'Attivista', text: 'Marx diceva: "I filosofi hanno solo interpretato il mondo; si tratta di trasformarlo".' },
    { speaker: 'Attivista', text: 'Ma forse anche i kana meritano liberazione. Non solo cattura, ma emancipazione.' },
  ],
];

const battleTaunts: string[] = [
  'Il kana nemico ti guarda con sfida!',
  'L\'aria vibra di energia spirituale!',
  'Come nel Mahabharata, la battaglia è inevitabile!',
  'Il destino si decide in questo istante!',
  'Ogni colpo è un karma che si compie!',
  'La via della spada non conosce esitazione!',
];

export default function App() {
  const [screen, setScreen] = useState<GameScreen>('title');
  const [playerTeam, setPlayerTeam] = useState<PlayerKana[]>([]);
  const [currentArea, setCurrentArea] = useState('genesis');
  const [defeatedAntagonists, setDefeatedAntagonists] = useState<string[]>([]);
  const [solvedPuzzles, setSolvedPuzzles] = useState<string[]>([]);
  const [capturedKana, setCapturedKana] = useState<string[]>([]);
  const [dialogueQueue, setDialogueQueue] = useState<DialogueLine[]>([]);
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [battleState, setBattleState] = useState<BattleState | null>(null);
  const [battleLog, setBattleLog] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(0);
  const [codeInput, setCodeInput] = useState('');
  const [puzzleResult, setPuzzleResult] = useState('');
  const [showStarterSelection, setShowStarterSelection] = useState(false);
  const [battleAnimating, setBattleAnimating] = useState(false);
  const [pendingAntagonistBattle, setPendingAntagonistBattle] = useState(false);
  const battleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const area = areas.find(a => a.id === currentArea)!;
  const currentPuzzle = puzzles.find(p => p.id === area?.puzzleId);

  // Cleanup battle timeout on unmount
  useEffect(() => {
    return () => {
      if (battleTimeoutRef.current) clearTimeout(battleTimeoutRef.current);
    };
  }, []);

  const startGame = useCallback(() => {
    setScreen('intro');
    setDialogueQueue(introDialogue);
    setCurrentDialogueIndex(0);
  }, []);

  const selectStarter = useCallback((kanaId: string) => {
    const kana = allKana.find(k => k.id === kanaId)!;
    const playerKana = createPlayerKana(kana);
    setPlayerTeam([playerKana]);
    setCapturedKana([kanaId]);
    setScreen('explore');
    setMessage(`${kana.hiragana} (${kana.katakana}) si unisce a te! "${kana.description}" — Come un discepolo che segue il maestro.`);
  }, []);

  const advanceDialogue = useCallback(() => {
    if (currentDialogueIndex < dialogueQueue.length - 1) {
      setCurrentDialogueIndex(prev => prev + 1);
    } else {
      // Dialogue finished
      if (screen === 'intro') {
        setShowStarterSelection(true);
      } else {
        setScreen('explore');
        setDialogueQueue([]);
        setCurrentDialogueIndex(0);
      }
    }
  }, [currentDialogueIndex, dialogueQueue.length, screen]);

  const explore = useCallback(() => {
    const roll = Math.random();
    const areaObj = areas.find(a => a.id === currentArea)!;

    if (roll < 0.35) {
      // Wild encounter
      const wildKana = getWildKanaForArea(currentArea, playerTeam.length > 0 ? playerTeam[selectedTeamIndex].level : 1);
      const enemy = wildKana[Math.floor(Math.random() * wildKana.length)];
      const enemyWithHp: BattleEnemy = { ...enemy, currentHp: enemy.hp };
      const playerKana = { ...playerTeam[selectedTeamIndex] };

      setBattleState({ playerKana, enemyKana: enemyWithHp, isPlayerTurn: true, turn: 1 });
      setBattleLog([`Un ${enemy.hiragana} (${enemy.katakana}) selvatico appare! [${enemy.romaji}] — ${enemy.element}`]);
      setScreen('battle');
      setPendingAntagonistBattle(false);
    } else if (roll < 0.55 && areaObj.antagonist && !defeatedAntagonists.includes(areaObj.antagonist)) {
      // Antagonist dialogue
      const lines = antagonistDialogues[areaObj.antagonist];
      setDialogueQueue(lines);
      setCurrentDialogueIndex(0);
      setScreen('dialogue');
    } else if (roll < 0.7 && areaObj.puzzleId && !solvedPuzzles.includes(areaObj.puzzleId)) {
      // Puzzle intro
      const puzzleLines = puzzleIntros[areaObj.puzzleId] || puzzleIntros.puzzle1;
      setDialogueQueue(puzzleLines);
      setCurrentDialogueIndex(0);
      setScreen('dialogue');
    } else {
      // Random exploration event
      const eventIndex = Math.floor(Math.random() * explorationEvents.length);
      const areaLines = areaDialogues[currentArea] || areaDialogues.genesis;
      const combined = [...areaLines, ...explorationEvents[eventIndex]];
      setDialogueQueue(combined);
      setCurrentDialogueIndex(0);
      setScreen('dialogue');
    }
  }, [currentArea, playerTeam, selectedTeamIndex, defeatedAntagonists, solvedPuzzles]);

  const performEnemyAttack = useCallback((currentState: BattleState) => {
    const { playerKana, enemyKana } = currentState;
    const elementBonus = elementChart[enemyKana.element]?.[playerKana.element] || 1;
    const damage = Math.max(1, Math.floor(enemyKana.attack * elementBonus - playerKana.defense * 0.4));
    const newHp = Math.max(0, playerKana.currentHp - damage);
    const taunt = battleTaunts[Math.floor(Math.random() * battleTaunts.length)];

    const newLog = [...battleLog, `${enemyKana.hiragana} attacca! ${damage} danni! ${elementBonus > 1 ? '(Super efficace!)' : ''} ${taunt}`];
    setBattleLog(newLog);

    const updatedPlayerKana = { ...playerKana, currentHp: newHp };

    if (newHp <= 0) {
      // Check if other team members alive
      const othersAlive = playerTeam.some((k, i) => i !== selectedTeamIndex && k.currentHp > 0);
      if (!othersAlive) {
        setBattleState(null);
        setScreen('gameover');
        setMessage('Tutti i tuoi kana sono esausti... "Tutto è sofferenza" disse il Buddha. Ma ogni fine è un nuovo inizio.');
        return;
      }
    }

    setBattleState({ ...currentState, playerKana: updatedPlayerKana, isPlayerTurn: true, turn: currentState.turn + 1 });
    setBattleAnimating(false);
    
    // Update team
    setPlayerTeam(prev => prev.map((k, i) => i === selectedTeamIndex ? updatedPlayerKana : k));
  }, [battleLog, playerTeam, selectedTeamIndex]);

  const battleAction = useCallback((action: 'attack' | 'special' | 'catch' | 'switch') => {
    if (!battleState || !battleState.isPlayerTurn || battleAnimating) return;

    const { playerKana, enemyKana } = battleState;

    if (action === 'switch') {
      const aliveMembers = playerTeam.filter((k, i) => i !== selectedTeamIndex && k.currentHp > 0);
      if (aliveMembers.length === 0) {
        setBattleLog(prev => [...prev, 'Non hai altri kana disponibili!']);
        return;
      }
      const nextIdx = playerTeam.findIndex((k, i) => i !== selectedTeamIndex && k.currentHp > 0);
      setSelectedTeamIndex(nextIdx);
      setBattleState({ ...battleState, playerKana: { ...playerTeam[nextIdx] }, isPlayerTurn: true });
      setBattleLog(prev => [...prev, `Vai, ${playerTeam[nextIdx].hiragana}! "${playerTeam[nextIdx].special}"`]);
      return;
    }

    if (action === 'catch') {
      const catchRate = Math.max(0.1, 1 - (enemyKana.currentHp / enemyKana.hp)) * 0.5 + (playerKana.level / (enemyKana.level + 5)) * 0.3;
      if (Math.random() < catchRate) {
        const captured = createPlayerKana(enemyKana);
        if (playerTeam.length < 6) {
          setPlayerTeam(prev => [...prev, captured]);
        }
        setCapturedKana(prev => prev.includes(enemyKana.id) ? prev : [...prev, enemyKana.id]);
        setBattleState(null);
        setScreen('capture');
        setMessage(`Hai catturato ${enemyKana.hiragana} (${enemyKana.katakana})! "${enemyKana.description}"`);
      } else {
        setBattleLog(prev => [...prev, `La cattura di ${enemyKana.hiragana} è fallita! Il kana resiste!`]);
        setBattleAnimating(true);
        setBattleState({ ...battleState, isPlayerTurn: false });
        battleTimeoutRef.current = setTimeout(() => performEnemyAttack({ ...battleState, isPlayerTurn: false }), 1200);
      }
      return;
    }

    // Attack or special
    const multiplier = action === 'special' ? 1.5 : 1;
    const elementBonus = elementChart[playerKana.element]?.[enemyKana.element] || 1;
    const baseDamage = Math.floor((playerKana.attack * multiplier * elementBonus) - (enemyKana.defense * 0.5));
    const damage = Math.max(1, baseDamage + Math.floor(Math.random() * 5));
    const newEnemyHp = Math.max(0, enemyKana.currentHp - damage);

    const actionName = action === 'special' ? playerKana.special : 'Attacco';
    const effectiveness = elementBonus > 1 ? '✨ Super efficace!' : elementBonus < 1 ? 'Poco efficace...' : '';
    const newLog = [...battleLog, `${playerKana.hiragana} usa ${actionName}! ${damage} danni! ${effectiveness}`];
    setBattleLog(newLog);

    const updatedEnemy = { ...enemyKana, currentHp: newEnemyHp };

    if (newEnemyHp <= 0) {
      // Enemy defeated
      const expGain = enemyKana.level * 10 + 20;
      let updatedKana = { ...playerKana, exp: playerKana.exp + expGain };
      let leveledUp = false;
      while (updatedKana.exp >= updatedKana.expToNext) {
        updatedKana = levelUp(updatedKana);
        leveledUp = true;
      }

      setPlayerTeam(prev => prev.map((k, i) => i === selectedTeamIndex ? updatedKana : k));

      if (pendingAntagonistBattle) {
        // Defeated antagonist's boss
        const areaObj = areas.find(a => a.id === currentArea)!;
        if (areaObj.antagonist) {
          setDefeatedAntagonists(prev => [...prev, areaObj.antagonist!]);
          const lines = victoryDialogues[areaObj.antagonist!] || [];
          setBattleState(null);
          setDialogueQueue(lines);
          setCurrentDialogueIndex(0);
          setScreen('dialogue');
          setPendingAntagonistBattle(false);
          return;
        }
      }

      setBattleState(null);
      setScreen('explore');
      setMessage(`${enemyKana.hiragana} sconfitto! +${expGain} EXP! ${leveledUp ? '🎉 LEVEL UP! Il kana è cresciuto in saggezza.' : ''}`);
    } else {
      setBattleState({ ...battleState, enemyKana: updatedEnemy, isPlayerTurn: false });
      setBattleAnimating(true);
      battleTimeoutRef.current = setTimeout(() => performEnemyAttack({ ...battleState, enemyKana: updatedEnemy, isPlayerTurn: false }), 1200);
    }
  }, [battleState, battleAnimating, playerTeam, selectedTeamIndex, battleLog, currentArea, pendingAntagonistBattle, performEnemyAttack]);

  const fightAntagonist = useCallback(() => {
    const areaObj = areas.find(a => a.id === currentArea)!;
    if (!areaObj.antagonist) return;

    const bossLevel = Math.max(5, (playerTeam[selectedTeamIndex]?.level || 1) + 3);
    const bossKana = allKana[Math.min(allKana.length - 1, bossLevel + 10)];
    const bossEnemy: BattleEnemy = {
      ...bossKana,
      currentHp: Math.floor(bossKana.hp * 1.8),
      hp: Math.floor(bossKana.hp * 1.8),
      attack: Math.floor(bossKana.attack * 1.3),
      level: bossLevel,
    };
    const playerKana = { ...playerTeam[selectedTeamIndex] };

    setBattleState({ playerKana, enemyKana: bossEnemy, isPlayerTurn: true, turn: 1 });
    setBattleLog([`⚔️ ${areaObj.antagonist} manda in campo il suo kana più forte: ${bossEnemy.hiragana} (${bossEnemy.katakana})! Lv.${bossEnemy.level}`]);
    setScreen('battle');
    setPendingAntagonistBattle(true);
  }, [currentArea, playerTeam, selectedTeamIndex]);

  const startPuzzle = useCallback(() => {
    const areaObj = areas.find(a => a.id === currentArea)!;
    if (!areaObj.puzzleId) return;
    const puzzle = puzzles.find(p => p.id === areaObj.puzzleId)!;
    setCodeInput(puzzle.starterCode);
    setPuzzleResult('');
    setScreen('puzzle');
  }, [currentArea]);

  const submitPuzzle = useCallback(() => {
    const areaObj = areas.find(a => a.id === currentArea)!;
    if (!areaObj.puzzleId) return;
    const puzzle = puzzles.find(p => p.id === areaObj.puzzleId)!;
    const result = validateSolution(puzzle, codeInput);
    setPuzzleResult(result.message);

    if (result.success) {
      setSolvedPuzzles(prev => [...prev, puzzle.id]);
      // Reward: heal team + exp
      setPlayerTeam(prev => prev.map(k => ({
        ...k,
        currentHp: k.hp,
        exp: k.exp + 30,
      })));
      setMessage(`🎉 Puzzle risolto! ${puzzle.religiousRef}`);
    }
  }, [codeInput, currentArea]);

  const healTeam = useCallback(() => {
    setPlayerTeam(prev => prev.map(k => ({ ...k, currentHp: k.hp })));
    setMessage('💚 La tua squadra è stata curata! Come l\'acqua del battesimo o il Gange sacro, la purificazione è completa.');
  }, []);

  const changeArea = useCallback((areaId: string) => {
    setCurrentArea(areaId);
    setMessage(`Sei arrivato a: ${areas.find(a => a.id === areaId)?.name}`);
  }, []);

  // RENDER FUNCTIONS
  if (screen === 'title') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black flex flex-col items-center justify-center text-white p-4 overflow-auto">
        <div className="text-center space-y-6 max-w-2xl">
          <div className="text-8xl mb-4 animate-pulse">仮</div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            仮名マスター
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">Kana Master: Le Scritture Viventi</h2>
          <p className="text-lg text-gray-400 italic max-w-lg mx-auto">
            "In principio era il Suono. E il Suono era i Kana, e ogni kana era un frammento del divino."
          </p>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Un viaggio epico attraverso le tradizioni religiose e filosofiche dell'umanità.
            Cattura tutti i kana giapponesi, combatti guardiani ideologici, risolvi puzzle di codice.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-gray-400 mt-4 max-w-md mx-auto">
            <span className="bg-gray-800/50 p-2 rounded">✝️ Cristianesimo</span>
            <span className="bg-gray-800/50 p-2 rounded">☸️ Buddismo</span>
            <span className="bg-gray-800/50 p-2 rounded">☪️ Islam</span>
            <span className="bg-gray-800/50 p-2 rounded">🕉️ Induismo</span>
            <span className="bg-gray-800/50 p-2 rounded">☯️ Taoismo</span>
            <span className="bg-gray-800/50 p-2 rounded">✡️ Ebraismo</span>
          </div>
          <button
            onClick={startGame}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30"
          >
            ▶ Inizia il Viaggio
          </button>
          <div className="text-xs text-gray-600 mt-4 space-y-1">
            <p>{allKana.length} kana da scoprire • 9 aree da esplorare • 6 antagonisti</p>
            <p>12 puzzle JavaScript • Battaglie strategiche • Dialoghi filosofici</p>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-black flex flex-col items-center justify-center text-white p-4">
        <div className="max-w-2xl w-full space-y-6">
          {!showStarterSelection ? (
            <div className="bg-gray-800/80 backdrop-blur rounded-xl p-6 border border-purple-500/30 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-2xl">📖</div>
                <p className="text-purple-300 font-bold text-lg">{dialogueQueue[currentDialogueIndex]?.speaker}</p>
              </div>
              <p className="text-lg leading-relaxed">{dialogueQueue[currentDialogueIndex]?.text}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs text-gray-500">{currentDialogueIndex + 1}/{dialogueQueue.length}</span>
                <button
                  onClick={advanceDialogue}
                  className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition font-bold"
                >
                  Continua ▶
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center text-yellow-400">Scegli il tuo primo Kana!</h2>
              <p className="text-center text-gray-400 text-sm">Ogni scelta è un atto di karma. Come disse il Buddha: "Siamo ciò che abbiamo pensato."</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[allKana[0], allKana[5], allKana[10]].map(kana => (
                  <button
                    key={kana.id}
                    onClick={() => selectStarter(kana.id)}
                    className="bg-gray-800 border-2 border-purple-500/50 rounded-xl p-5 hover:border-yellow-400 transition-all hover:scale-105 text-left"
                  >
                    <div className="text-5xl mb-3 text-center">{kana.hiragana} <span className="text-3xl text-gray-400">/</span> {kana.katakana}</div>
                    <div className="text-sm text-yellow-300 font-bold">{kana.romaji.toUpperCase()} — {kana.element}</div>
                    <div className="text-xs text-gray-400 mt-2 italic">{kana.description}</div>
                    <div className="text-xs mt-3 text-purple-300 grid grid-cols-2 gap-1">
                      <span>❤️ HP: {kana.hp}</span>
                      <span>⚔️ ATK: {kana.attack}</span>
                      <span>🛡️ DEF: {kana.defense}</span>
                      <span>💨 SPD: {kana.speed}</span>
                    </div>
                    <div className="text-xs mt-2 text-pink-300">✨ {kana.special}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (screen === 'dialogue') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center text-white p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-gray-800/90 backdrop-blur rounded-xl p-6 border border-blue-500/30 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-xl">💬</div>
              <p className="text-blue-300 font-bold">{dialogueQueue[currentDialogueIndex]?.speaker}</p>
            </div>
            <p className="text-lg leading-relaxed mb-4">{dialogueQueue[currentDialogueIndex]?.text}</p>
            <div className="flex justify-between items-center border-t border-gray-700 pt-4">
              <span className="text-xs text-gray-500">{currentDialogueIndex + 1}/{dialogueQueue.length}</span>
              {currentDialogueIndex < dialogueQueue.length - 1 ? (
                <button onClick={advanceDialogue} className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-bold">
                  Continua ▶
                </button>
              ) : (
                <div className="flex gap-2 flex-wrap">
                  <button onClick={() => { setScreen('explore'); setDialogueQueue([]); }} className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition text-sm">
                    🗺️ Esplora
                  </button>
                  {area?.antagonist && !defeatedAntagonists.includes(area.antagonist) && (
                    <button onClick={() => { setDialogueQueue([]); fightAntagonist(); }} className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition text-sm">
                      ⚔️ Combatti
                    </button>
                  )}
                  {area?.puzzleId && !solvedPuzzles.includes(area.puzzleId) && (
                    <button onClick={() => { setDialogueQueue([]); startPuzzle(); }} className="px-4 py-2 bg-yellow-600 rounded-lg hover:bg-yellow-700 transition text-sm">
                      💻 Puzzle
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'puzzle' && currentPuzzle) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center text-white p-4">
        <div className="max-w-3xl w-full space-y-4">
          <div className="bg-gray-800/90 rounded-xl p-6 border border-yellow-500/30">
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">💻 {currentPuzzle.title}</h2>
            <p className="text-gray-300 mb-2">{currentPuzzle.description}</p>
            <p className="text-sm text-purple-300 italic mb-3">📖 {currentPuzzle.religiousRef}</p>
            <p className="text-sm text-gray-400 mb-4">💡 Hint: {currentPuzzle.hint}</p>
            
            <div className="bg-gray-950 rounded-lg p-1 border border-gray-700">
              <textarea
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                className="w-full h-48 bg-transparent text-green-400 font-mono text-sm p-3 focus:outline-none resize-none"
                spellCheck={false}
              />
            </div>
            
            <div className="flex gap-2 mt-4">
              <button onClick={submitPuzzle} className="px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700 font-bold transition">
                ▶ Esegui
              </button>
              <button onClick={() => setScreen('explore')} className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition">
                ← Indietro
              </button>
            </div>
            
            {puzzleResult && (
              <div className={`mt-4 p-3 rounded-lg ${puzzleResult.includes('✅') ? 'bg-green-900/50 border border-green-500' : 'bg-red-900/50 border border-red-500'}`}>
                <p className="text-sm">{puzzleResult}</p>
                {puzzleResult.includes('✅') && (
                  <button onClick={() => { setScreen('explore'); setPuzzleResult(''); }} className="mt-2 px-4 py-1 bg-green-600 rounded text-sm hover:bg-green-700">
                    Continua ▶
                  </button>
                )}
              </div>
            )}
            
            <div className="mt-4 text-xs text-gray-500 bg-gray-900/50 rounded-lg p-3">
              <p className="font-bold mb-1">Test Cases:</p>
              {currentPuzzle.testCases.map((tc, i) => (
                <p key={i}>• {tc.description}: <code className="text-gray-400">input={JSON.stringify(tc.input)}</code> → <code className="text-yellow-400">{JSON.stringify(tc.expected)}</code></p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'battle' && battleState) {
    const { playerKana, enemyKana } = battleState;
    const playerHpPercent = (playerKana.currentHp / playerKana.hp) * 100;
    const enemyHpPercent = (enemyKana.currentHp / enemyKana.hp) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-b from-red-950 via-gray-900 to-black flex flex-col text-white p-3">
        <div className="max-w-4xl w-full mx-auto space-y-3 flex-1 flex flex-col">
          {/* Enemy Section */}
          <div className="bg-gray-800/80 rounded-xl p-4 border border-red-500/30">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="text-5xl bg-red-900/50 w-16 h-16 rounded-lg flex items-center justify-center border border-red-500/50">
                  {enemyKana.hiragana}
                </div>
                <div>
                  <div className="font-bold">{enemyKana.katakana} <span className="text-gray-400 text-sm">({enemyKana.romaji})</span></div>
                  <div className="text-xs text-gray-400">Lv.{enemyKana.level} — {enemyKana.element}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="w-40 bg-gray-700 rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full transition-all duration-500" style={{ width: `${enemyHpPercent}%` }} />
                </div>
                <div className="text-xs text-gray-500 mt-1">{enemyKana.currentHp}/{enemyKana.hp}</div>
              </div>
            </div>
          </div>

          {/* Battle Log */}
          <div className="bg-gray-900/80 rounded-lg p-3 h-20 overflow-y-auto border border-gray-700 text-sm">
            {battleLog.slice(-5).map((log, i) => (
              <p key={i} className="text-gray-300 py-0.5">{log}</p>
            ))}
          </div>

          {/* Player Section */}
          <div className="bg-gray-800/80 rounded-xl p-4 border border-blue-500/30">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="text-5xl bg-blue-900/50 w-16 h-16 rounded-lg flex items-center justify-center border border-blue-500/50">
                  {playerKana.hiragana}
                </div>
                <div>
                  <div className="font-bold">{playerKana.katakana} <span className="text-gray-400 text-sm">({playerKana.romaji})</span></div>
                  <div className="text-xs text-gray-400">Lv.{playerKana.level} — {playerKana.element}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="w-40 bg-gray-700 rounded-full h-3">
                  <div className={`h-3 rounded-full transition-all duration-500 ${playerHpPercent > 50 ? 'bg-green-500' : playerHpPercent > 20 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${playerHpPercent}%` }} />
                </div>
                <div className="text-xs text-gray-500 mt-1">{playerKana.currentHp}/{playerKana.hp} | EXP:{playerKana.exp}/{playerKana.expToNext}</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-auto">
            {battleState.isPlayerTurn && !battleAnimating ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <button onClick={() => battleAction('attack')} className="px-4 py-3 bg-red-600 rounded-lg hover:bg-red-700 font-bold transition active:scale-95">
                  ⚔️ Attacco
                </button>
                <button onClick={() => battleAction('special')} className="px-4 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 font-bold transition active:scale-95">
                  ✨ {playerKana.special}
                </button>
                <button onClick={() => battleAction('catch')} className="px-4 py-3 bg-yellow-600 rounded-lg hover:bg-yellow-700 font-bold transition active:scale-95">
                  🎯 Cattura
                </button>
                <button onClick={() => battleAction('switch')} className="px-4 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 font-bold transition active:scale-95">
                  🔄 Cambia
                </button>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="animate-pulse text-yellow-400 font-bold">⏳ Turno del nemico...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'capture') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-yellow-900 to-black flex flex-col items-center justify-center text-white p-4">
        <div className="max-w-lg w-full text-center space-y-6">
          <div className="text-8xl animate-bounce mb-4">{playerTeam[playerTeam.length - 1]?.hiragana}</div>
          <div className="text-4xl">{playerTeam[playerTeam.length - 1]?.katakana}</div>
          <h2 className="text-2xl font-bold text-yellow-400">🎉 Cattura Riuscita!</h2>
          <p className="text-gray-300">{message}</p>
          <button onClick={() => { setScreen('explore'); setMessage(''); }} className="px-6 py-3 bg-yellow-600 rounded-lg hover:bg-yellow-700 font-bold transition">
            Continua ▶
          </button>
        </div>
      </div>
    );
  }

  if (screen === 'gameover') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-red-900 flex flex-col items-center justify-center text-white p-4">
        <div className="max-w-lg w-full text-center space-y-6">
          <div className="text-6xl">💀</div>
          <h2 className="text-4xl font-bold text-red-400">Sconfitta...</h2>
          <p className="text-gray-300">{message}</p>
          <p className="text-gray-400 italic">"La morte non è la fine. È solo un altro inizio." — Bhagavad Gita 2:27</p>
          <button onClick={() => { healTeam(); setScreen('explore'); }} className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700 font-bold transition">
            🔄 Ricomincia
          </button>
        </div>
      </div>
    );
  }

  if (screen === 'team') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center text-white p-4">
        <div className="max-w-4xl w-full space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-yellow-400">👥 La Tua Squadra ({playerTeam.length}/6)</h2>
            <button onClick={() => setScreen('explore')} className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 text-sm">
              ← Indietro
            </button>
          </div>
          <p className="text-sm text-gray-400">Kana catturati: {capturedKana.length}/{allKana.length} | Guardiani: {defeatedAntagonists.length}/6 | Puzzle: {solvedPuzzles.length}/{puzzles.length}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {playerTeam.map((kana, i) => (
              <div key={i} className={`bg-gray-800 rounded-lg p-4 border ${i === selectedTeamIndex ? 'border-yellow-500' : 'border-purple-500/30'}`}>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{kana.hiragana}</span>
                    <span className="text-xl text-gray-400">{kana.katakana}</span>
                  </div>
                  <span className="text-xs bg-purple-600 px-2 py-1 rounded">Lv.{kana.level}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">{kana.romaji} — {kana.element}</p>
                <p className="text-xs text-gray-500 mt-1 italic">{kana.description}</p>
                <div className="mt-2 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>❤️ HP</span>
                    <span>{kana.currentHp}/{kana.hp}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(kana.currentHp / kana.hp) * 100}%` }} />
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>⭐ EXP</span>
                    <span>{kana.exp}/{kana.expToNext}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${Math.min(100, (kana.exp / kana.expToNext) * 100)}%` }} />
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-2">⚔️{kana.attack} 🛡️{kana.defense} 💨{kana.speed}</div>
                <div className="text-xs text-pink-300 mt-1">✨ {kana.special}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // EXPLORE SCREEN (default)
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col text-white">
      {/* Top bar */}
      <div className="bg-gray-800 p-2 flex justify-between items-center text-sm border-b border-gray-700 flex-wrap gap-1">
        <div className="flex items-center gap-3">
          <span className="text-yellow-400 font-bold text-xs md:text-sm">{area.name}</span>
          <span className="text-gray-400 text-xs">Lv.{playerTeam.length > 0 ? playerTeam[selectedTeamIndex]?.level : 1}</span>
          <span className="text-gray-400 text-xs hidden md:inline">📦 {capturedKana.length}/{allKana.length}</span>
        </div>
        <div className="flex gap-1">
          <button onClick={() => setScreen('team')} className="px-2 py-1 bg-purple-600 rounded text-xs hover:bg-purple-700">
            👥
          </button>
          <button onClick={healTeam} className="px-2 py-1 bg-green-600 rounded text-xs hover:bg-green-700">
            💚
          </button>
        </div>
      </div>

      {/* 3D Scene */}
      <GameScene
        areaId={currentArea}
        areaColor={area.color}
        groundColor={area.groundColor}
        ambientColor={area.ambientColor}
      />

      {/* Message overlay */}
      {message && (
        <div className="mx-3 -mt-8 relative z-10 bg-black/90 rounded-lg p-3 text-sm text-yellow-300 border border-yellow-500/30">
          {message}
          <button onClick={() => setMessage('')} className="ml-2 text-xs text-gray-400 hover:text-white">✕</button>
        </div>
      )}

      {/* Area info and controls */}
      <div className="bg-gray-800/95 p-4 border-t border-gray-700 flex-1">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-300 mb-1">{area.description}</p>
          <p className="text-xs text-purple-300 italic mb-3">📖 {area.philosophy}</p>

          {/* Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
            <button onClick={explore} className="px-4 py-2.5 bg-indigo-600 rounded-lg hover:bg-indigo-700 font-bold transition text-sm active:scale-95">
              🌿 Esplora
            </button>
            {area.antagonist && !defeatedAntagonists.includes(area.antagonist) && (
              <button onClick={fightAntagonist} className="px-4 py-2.5 bg-red-600 rounded-lg hover:bg-red-700 font-bold transition text-sm active:scale-95">
                ⚔️ {area.antagonist === 'cristoforo' ? 'Fra Cristoforo' : area.antagonist === 'bodhi' ? 'Monaco Bodhi' : area.antagonist === 'rashid' ? 'Al-Rashid' : area.antagonist === 'kali' ? 'Deva Kali' : area.antagonist === 'lao' ? 'Saggio Lao' : 'Rabbi Ezra'}
              </button>
            )}
            {area.puzzleId && !solvedPuzzles.includes(area.puzzleId) && (
              <button onClick={startPuzzle} className="px-4 py-2.5 bg-yellow-600 rounded-lg hover:bg-yellow-700 font-bold transition text-sm active:scale-95">
                💻 Puzzle
              </button>
            )}
            <button onClick={() => setScreen('team')} className="px-4 py-2.5 bg-purple-600 rounded-lg hover:bg-purple-700 font-bold transition text-sm active:scale-95">
              👥 Squadra
            </button>
          </div>

          {/* Area navigation */}
          <div className="border-t border-gray-700 pt-3">
            <p className="text-xs text-gray-400 mb-2">🗺️ Viaggia verso:</p>
            <div className="flex flex-wrap gap-2">
              {area.connections.map(connId => {
                const connArea = areas.find(a => a.id === connId);
                if (!connArea) return null;
                const locked = connArea.requiredLevel > (playerTeam[selectedTeamIndex]?.level || 1);
                return (
                  <button
                    key={connId}
                    onClick={() => !locked && changeArea(connId)}
                    disabled={locked}
                    className={`px-3 py-1.5 rounded-lg text-xs transition ${locked ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed' : 'bg-gray-600 hover:bg-gray-500 text-white active:scale-95'}`}
                  >
                    {locked ? '🔒' : '➡️'} {connArea.name} {locked ? `(Lv.${connArea.requiredLevel})` : ''}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-3 border-t border-gray-700 pt-2">
            <div className="grid grid-cols-3 gap-2 text-xs text-gray-500">
              <div>
                <div className="flex justify-between"><span>⚔️ Guardiani</span><span>{defeatedAntagonists.length}/6</span></div>
                <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1"><div className="bg-red-500 h-1.5 rounded-full" style={{ width: `${(defeatedAntagonists.length / 6) * 100}%` }} /></div>
              </div>
              <div>
                <div className="flex justify-between"><span>💻 Puzzle</span><span>{solvedPuzzles.length}/{puzzles.length}</span></div>
                <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1"><div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: `${(solvedPuzzles.length / puzzles.length) * 100}%` }} /></div>
              </div>
              <div>
                <div className="flex justify-between"><span>📦 Kana</span><span>{capturedKana.length}/{allKana.length}</span></div>
                <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1"><div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${(capturedKana.length / allKana.length) * 100}%` }} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
