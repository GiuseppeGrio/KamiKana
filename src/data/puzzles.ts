export interface Puzzle {
  id: string;
  title: string;
  description: string;
  hint: string;
  starterCode: string;
  testCases: { input: any; expected: any; description: string }[];
  area: string;
  difficulty: number;
  religiousRef: string;
}

export const puzzles: Puzzle[] = [
  {
    id: 'sort_kana',
    title: 'L\'Ordinamento Divino',
    description: 'I kana sono nel caos! Come Dio ordinò il cosmo nella Genesi, ordina un array di kana per livello crescente. Scrivi una funzione che prende un array di oggetti con proprietà "level" e li ordini.',
    hint: 'Usa il metodo .sort() con una funzione di confronto: (a, b) => a.level - b.level',
    starterCode: `function sortKanaByLevel(kanaArray) {\n  // Scrivi il tuo codice qui\n  \n}`,
    testCases: [
      { input: [{ level: 3 }, { level: 1 }, { level: 2 }], expected: [{ level: 1 }, { level: 2 }, { level: 3 }], description: 'Ordina 3 kana' },
      { input: [{ level: 5 }, { level: 5 }, { level: 1 }], expected: [{ level: 1 }, { level: 5 }, { level: 5 }], description: 'Ordina con duplicati' },
      { input: [{ level: 10 }, { level: 2 }, { level: 7 }, { level: 1 }], expected: [{ level: 1 }, { level: 2 }, { level: 7 }, { level: 10 }], description: 'Ordina 4 kana' },
    ],
    area: 'genesis',
    difficulty: 1,
    religiousRef: 'Genesi 1: "Dio separò la luce dalle tenebre" — ordinare è creare ordine dal caos.'
  },
  {
    id: 'count_vowels',
    title: 'Le Vocali Sacre',
    description: 'Nel Corano, le vocali danno vita alle consonanti. Conta quante vocali (a, i, u, e, o) ci sono in una stringa. Scrivi una funzione che conta le vocali.',
    hint: 'Usa un loop o .match() con una regex: /[aiueo]/gi',
    starterCode: `function countVowels(str) {\n  // Scrivi il tuo codice qui\n  \n}`,
    testCases: [
      { input: 'konnichiwa', expected: 4, description: 'Conta vocali in konnichiwa' },
      { input: 'arigatou', expected: 4, description: 'Conta vocali in arigatou' },
      { input: 'xyz', expected: 0, description: 'Nessuna vocale' },
    ],
    area: 'cathedral',
    difficulty: 1,
    religiousRef: 'Corano 55:1-2: "Il Misericordioso ha insegnato il Corano" — le vocali sono il respiro della parola divina.'
  },
  {
    id: 'karma_sum',
    title: 'Il Calcolo del Karma',
    description: 'Nel Buddismo, il karma è la somma di tutte le azioni. Calcola il "karma" di un kana sommando hp + attack + defense + speed. Scrivi una funzione ricorsiva per un array.',
    hint: 'Usa la ricorsione o .reduce(): array.reduce((sum, k) => sum + k.hp + k.attack + k.defense + k.speed, 0)',
    starterCode: `function calculateKarma(kanaArray) {\n  // Scrivi il tuo codice qui\n  // Il karma di un kana è: hp + attack + defense + speed\n  // Somma il karma di tutti i kana nell'array\n  \n}`,
    testCases: [
      { input: [{ hp: 10, attack: 5, defense: 3, speed: 7 }], expected: 25, description: 'Un kana' },
      { input: [{ hp: 10, attack: 5, defense: 3, speed: 7 }, { hp: 20, attack: 10, defense: 6, speed: 14 }], expected: 75, description: 'Due kana' },
      { input: [], expected: 0, description: 'Array vuoto' },
    ],
    area: 'temple',
    difficulty: 2,
    religiousRef: 'Buddismo: "Come il seme, così il frutto" — ogni azione ha una conseguenza che si accumula.'
  },
  {
    id: 'gematria',
    title: 'La Ghematria Mistica',
    description: 'Nella Kabbalah, ogni lettera ha un valore numerico. Assegna ad ogni kana un valore basato sulla sua posizione (a=1, ka=2, sa=3...). Scrivi una funzione che calcola il valore totale di una parola di kana romaji.',
    hint: 'Crea un oggetto mappa {a:1, ka:2, sa:3...} e somma i valori di ogni sillaba nella parola.',
    starterCode: `function gematria(word) {\n  // Mappa delle prime 10 sillabe\n  const values = {a:1,i:2,u:3,e:4,o:5,ka:6,ki:7,ku:8,ke:9,ko:10};\n  // Scrivi il tuo codice qui\n  // Trova le sillabe nella parola e somma i loro valori\n  \n}`,
    testCases: [
      { input: 'a', expected: 1, description: 'Vale 1' },
      { input: 'ka', expected: 6, description: 'ka vale 6' },
      { input: 'aika', expected: 14, description: 'a(1) + i(2) + ka(6) = 9... o ai(2)+ka(6)=8' },
    ],
    area: 'desert',
    difficulty: 2,
    religiousRef: 'Kabbalah: "Dio guardò nelle lettere e creò i mondi" — Sefer Yetzirah. Ogni lettera è un mattone della realtà.'
  },
  {
    id: 'find_strongest',
    title: 'Il Guerriero Supremo',
    description: 'Come Indra cercava il più forte tra gli dei, trova il kana con la somma più alta di statistiche in un array. Restituisci l\'oggetto kana completo.',
    hint: 'Usa .reduce() per confrontare: trova il kana con il valore più alto di (hp+attack+defense+speed)',
    starterCode: `function findStrongest(kanaArray) {\n  // Scrivi il tuo codice qui\n  // Trova il kana con la somma più alta di hp+attack+defense+speed\n  \n}`,
    testCases: [
      { input: [{ id: 'a', hp: 10, attack: 5, defense: 3, speed: 7 }, { id: 'ka', hp: 20, attack: 15, defense: 10, speed: 12 }], expected: 'ka', description: 'ka è più forte' },
      { input: [{ id: 'sa', hp: 50, attack: 50, defense: 50, speed: 50 }, { id: 'ta', hp: 10, attack: 10, defense: 10, speed: 10 }], expected: 'sa', description: 'sa è più forte' },
    ],
    area: 'mountain',
    difficulty: 3,
    religiousRef: 'Induismo: Indra, re degli dei, è il più forte. Ma anche lui è soggetto al karma e alla rinascita.'
  },
  {
    id: 'filter_element',
    title: 'La Purificazione degli Elementi',
    description: 'Come il fuoco purifica l\'oro, filtra un array di kana per elemento. Scrivi una funzione che restituisce solo i kana di un dato elemento.',
    hint: 'Usa .filter(): kanaArray.filter(k => k.element === targetElement)',
    starterCode: `function filterByElement(kanaArray, element) {\n  // Scrivi il tuo codice qui\n  // Restituisci solo i kana dell'elemento specificato\n  \n}`,
    testCases: [
      { input: [[{ id: 'a', element: 'fuoco' }, { id: 'i', element: 'acqua' }, { id: 'u', element: 'fuoco' }], 'fuoco'], expected: 2, description: '2 kana fuoco' },
      { input: [[{ id: 'a', element: 'terra' }, { id: 'i', element: 'terra' }], 'aria'], expected: 0, description: '0 kana aria' },
    ],
    area: 'mosque',
    difficulty: 1,
    religiousRef: 'Islam: I quattro elementi nella cosmologia islamica riflettono la saggezza di Allah nella creazione.'
  },
  {
    id: 'reverse_string',
    title: 'Il Specchio della Verità',
    description: 'Come lo specchio di Amaterasu rivela la verità, inverti una stringa. Il Sufismo dice che il mondo è un riflesso del divino.',
    hint: 'Usa: str.split("").reverse().join("")',
    starterCode: `function reverseString(str) {\n  // Scrivi il tuo codice qui\n  // Inverti la stringa\n  \n}`,
    testCases: [
      { input: 'karma', expected: 'amrak', description: 'Inverti karma' },
      { input: 'zen', expected: 'nez', description: 'Inverti zen' },
      { input: 'a', expected: 'a', description: 'Singolo carattere' },
    ],
    area: 'garden',
    difficulty: 1,
    religiousRef: 'Sufismo: Rumi — "Il mondo è uno specchio in cui vedi il riflesso di Dio".'
  },
  {
    id: 'fibonacci',
    title: 'La Sequenza di Fibonacci Sacra',
    description: 'La sequenza di Fibonacci appare nella natura — nei girasoli, nelle conchiglie, nelle galassie. Anche i pitagorici la consideravano sacra. Genera i primi n numeri.',
    hint: 'Ogni numero è la somma dei due precedenti: [0, 1, 1, 2, 3, 5, 8, 13...]',
    starterCode: `function fibonacci(n) {\n  // Scrivi il tuo codice qui\n  // Restituisci un array con i primi n numeri di Fibonacci\n  \n}`,
    testCases: [
      { input: 5, expected: [0, 1, 1, 2, 3], description: 'Primi 5' },
      { input: 8, expected: [0, 1, 1, 2, 3, 5, 8, 13], description: 'Primi 8' },
      { input: 1, expected: [0], description: 'Solo il primo' },
    ],
    area: 'abyss',
    difficulty: 3,
    religiousRef: 'Pitagorismo: "Tutto è numero". La sequenza sacra appare nel Nautilus, nei girasoli, nelle galassie a spirale.'
  },
  {
    id: 'flatten_array',
    title: 'L\'Appiattimento del Samsara',
    description: 'Nel Buddismo, il samsara è un ciclo di vite dentro altre vite. "Appiattisci" un array annidato — porta tutte le vite allo stesso livello.',
    hint: 'Usa .flat() o la ricorsione: array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), [])',
    starterCode: `function flattenArray(arr) {\n  // Scrivi il tuo codice qui\n  // Appiattisci un array annidato a qualsiasi profondità\n  \n}`,
    testCases: [
      { input: [1, [2, 3], [4, [5]]], expected: [1, 2, 3, 4, 5], description: 'Annidamento doppio' },
      { input: [[1], [2], [3]], expected: [1, 2, 3], description: 'Annidamento singolo' },
      { input: [1, 2, 3], expected: [1, 2, 3], description: 'Già piatto' },
    ],
    area: 'temple',
    difficulty: 3,
    religiousRef: 'Buddismo: Le sei realm dell\'esistenza sono annidate una nell\'altra. Liberarsi significa "appiattire" il samsara.'
  },
  {
    id: 'palindrome',
    title: 'Il Cerchio dell\'Eternità',
    description: 'L\'Ouroboros, il serpente che si morde la coda — un palindromo vivente. Verifica se una stringa è palindroma (si legge uguale da entrambi i lati).',
    hint: 'Confronta la stringa con la sua versione invertita: str === str.split("").reverse().join("")',
    starterCode: `function isPalindrome(str) {\n  // Scrivi il tuo codice qui\n  // Restituisci true se la stringa è palindroma\n  \n}`,
    testCases: [
      { input: 'anna', expected: true, description: 'anna è palindroma' },
      { input: 'karma', expected: false, description: 'karma non è palindroma' },
      { input: 'racecar', expected: true, description: 'racecar è palindroma' },
    ],
    area: 'final',
    difficulty: 2,
    religiousRef: 'Induismo: L\'Ouroboros simboleggia il ciclo eterno di creazione e distruzione. L\'inizio è la fine.'
  },
  {
    id: 'max_depth',
    title: 'La Profondità del Vuoto',
    description: 'Quanto è profondo il vuoto? Calcola la massima profondità di annidamento in un array. Come i livelli di coscienza nella meditazione.',
    hint: 'Usa la ricorsione: se un elemento è un array, calcola la sua profondità + 1',
    starterCode: `function maxDepth(arr) {\n  // Scrivi il tuo codice qui\n  // Trova la profondità massima di annidamento\n  // Esempio: [1, [2, [3]]] ha profondità 3\n  \n}`,
    testCases: [
      { input: [1, 2, 3], expected: 1, description: 'Nessun annidamento' },
      { input: [1, [2, [3]]], expected: 3, description: 'Profondità 3' },
      { input: [[[[1]]]], expected: 4, description: 'Profondità 4' },
    ],
    area: 'abyss',
    difficulty: 3,
    religiousRef: 'Mistica: I livelli di profondità nella meditazione — dhyāna — sono infiniti. Ogni livello rivela un nuovo abisso.'
  },
  {
    id: 'unique_elements',
    title: 'L\'Unicità dell\'Anima',
    description: 'Nell\'Islam, ogni anima è unica davanti ad Allah. Rimuovi i duplicati da un array. Ogni elemento deve apparire una sola volta.',
    hint: 'Usa Set: [...new Set(array)]',
    starterCode: `function uniqueElements(arr) {\n  // Scrivi il tuo codice qui\n  // Rimuovi i duplicati\n  \n}`,
    testCases: [
      { input: [1, 2, 2, 3, 3, 3], expected: [1, 2, 3], description: 'Rimuovi duplicati' },
      { input: [1, 1, 1], expected: [1], description: 'Tutti uguali' },
      { input: [1, 2, 3], expected: [1, 2, 3], description: 'Nessun duplicato' },
    ],
    area: 'mosque',
    difficulty: 1,
    religiousRef: 'Islam: "Non c\'è dio all\'infuori di Dio" — l\'unicità (Tawhid) è il principio fondamentale.'
  },
];

export function validateSolution(puzzle: Puzzle, userCode: string): { success: boolean; message: string; output?: any } {
  try {
    // Create a function from user code
    const fn = new Function(`${userCode}\nreturn ${puzzle.id === 'sort_kana_by_level' ? 'sortKanaByLevel' : 
      puzzle.id === 'count_vowels' ? 'countVowels' :
      puzzle.id === 'karma_sum' ? 'calculateKarma' :
      puzzle.id === 'gematria' ? 'gematria' :
      puzzle.id === 'find_strongest' ? 'findStrongest' :
      puzzle.id === 'filter_element' ? 'filterByElement' :
      puzzle.id === 'reverse_string' ? 'reverseString' :
      puzzle.id === 'fibonacci' ? 'fibonacci' :
      puzzle.id === 'flatten_array' ? 'flattenArray' :
      puzzle.id === 'palindrome' ? 'isPalindrome' :
      puzzle.id === 'max_depth' ? 'maxDepth' :
      puzzle.id === 'unique_elements' ? 'uniqueElements' : 'solution'};`)();

    for (const tc of puzzle.testCases) {
      const result = Array.isArray(tc.input) && tc.input.length > 0 && typeof tc.input[0] === 'object' 
        ? fn(tc.input) 
        : fn(...(Array.isArray(tc.input) ? tc.input : [tc.input]));

      let passed = false;
      if (typeof tc.expected === 'object' && Array.isArray(tc.expected)) {
        passed = JSON.stringify(result) === JSON.stringify(tc.expected);
      } else if (typeof tc.expected === 'string' && typeof result === 'object') {
        passed = result?.id === tc.expected;
      } else {
        passed = result === tc.expected;
      }

      if (!passed) {
        return { success: false, message: `Test fallito: "${tc.description}". Risultato atteso: ${JSON.stringify(tc.expected)}, ottenuto: ${JSON.stringify(result)}` };
      }
    }

    return { success: true, message: '✅ Tutti i test superati! Il codice è corretto.' };
  } catch (e: any) {
    return { success: false, message: `❌ Errore nel codice: ${e.message}` };
  }
}
