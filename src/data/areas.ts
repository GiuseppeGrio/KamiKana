export interface Area {
  id: string;
  name: string;
  description: string;
  color: string;
  ambientColor: string;
  groundColor: string;
  requiredLevel: number;
  wildKanaLevels: [number, number];
  encounters: number;
  antagonist?: string;
  puzzleId?: string;
  connections: string[];
  religiousTheme: string;
  philosophy: string;
}

export const areas: Area[] = [
  {
    id: 'genesis',
    name: 'Pianura della Genesi',
    description: 'Dove tutto ebbe inizio. Praterie verdi sotto un cielo infinito. I kana più puri vagano qui.',
    color: '#4ade80',
    ambientColor: '#fef9c3',
    groundColor: '#22c55e',
    requiredLevel: 1,
    wildKanaLevels: [1, 5],
    encounters: 15,
    connections: ['cathedral', 'temple', 'garden'],
    religiousTheme: 'Creazione',
    philosophy: 'Tutte le tradizioni parlano di un inizio. Bereshit, In principio, Kun fayakun...'
  },
  {
    id: 'cathedral',
    name: 'Cattedrale della Luce',
    description: 'Una gotica cattedrale di cristallo. Vetrate colorate narrano storie di fede e dubbio.',
    color: '#fbbf24',
    ambientColor: '#fef3c7',
    groundColor: '#92400e',
    requiredLevel: 5,
    wildKanaLevels: [5, 12],
    encounters: 12,
    antagonist: 'cristoforo',
    puzzleId: 'count_vowels',
    connections: ['genesis', 'desert', 'mountain'],
    religiousTheme: 'Cristianesimo',
    philosophy: 'Fede vs Ragione. Tommaso d\'Aquino vs Lutero. La Riforma e la Controriforma.'
  },
  {
    id: 'temple',
    name: 'Tempio del Vuoto',
    description: 'Un tempio zen minimalista. Giardino di rocce, bambù, e il suono del silenzio.',
    color: '#a78bfa',
    ambientColor: '#ede9fe',
    groundColor: '#6b7280',
    requiredLevel: 8,
    wildKanaLevels: [8, 15],
    encounters: 12,
    antagonist: 'bodhi',
    puzzleId: 'karma_sum',
    connections: ['genesis', 'garden', 'abyss'],
    religiousTheme: 'Buddismo',
    philosophy: 'Śūnyatā, il vuoto. Anattā, il non-sé. La Via di Mezzo di Nagarjuna.'
  },
  {
    id: 'mosque',
    name: 'Moschea della Mezzaluna',
    description: 'Geometrie infinite, mosaici blu e oro. Il richiamo alla preghiera echeggia.',
    color: '#3b82f6',
    ambientColor: '#dbeafe',
    groundColor: '#1e3a5f',
    requiredLevel: 10,
    wildKanaLevels: [10, 18],
    encounters: 10,
    antagonist: 'rashid',
    puzzleId: 'unique_elements',
    connections: ['cathedral', 'desert', 'garden'],
    religiousTheme: 'Islam',
    philosophy: 'Tawhid, l\'unicità divina. Sharia vs Sufismo. Ragione e rivelazione.'
  },
  {
    id: 'garden',
    name: 'Giardino dell\'Armonia',
    description: 'Un giardino taoista dove tutto scorre naturalmente. Acqua, pietra, vuoto.',
    color: '#34d399',
    ambientColor: '#d1fae5',
    groundColor: '#065f46',
    requiredLevel: 12,
    wildKanaLevels: [12, 20],
    encounters: 10,
    antagonist: 'lao',
    puzzleId: 'reverse_string',
    connections: ['genesis', 'temple', 'mosque'],
    religiousTheme: 'Taoismo',
    philosophy: 'Wu wei, il non-agire. Yin e Yang. Il Tao che non può essere nominato.'
  },
  {
    id: 'desert',
    name: 'Deserto della Rivelazione',
    description: 'Sabbia infinita sotto stelle eterne. Qui Abramo, Mosè e Maometto cercarono la verità.',
    color: '#f59e0b',
    ambientColor: '#fef3c7',
    groundColor: '#d97706',
    requiredLevel: 15,
    wildKanaLevels: [15, 22],
    encounters: 10,
    antagonist: 'rabbi',
    puzzleId: 'gematria',
    connections: ['cathedral', 'mosque', 'mountain'],
    religiousTheme: 'Ebraismo / Tradizioni abramitiche',
    philosophy: 'Kabbalah, Ghematria, il Nome Ineffabile. Le radici comuni delle tre fedi.'
  },
  {
    id: 'mountain',
    name: 'Montagna Sacra',
    description: 'Una vetta che tocca il cielo. Qui Shiva medita e Kali danza. Gli dei sono vicini.',
    color: '#ef4444',
    ambientColor: '#fecaca',
    groundColor: '#7f1d1d',
    requiredLevel: 18,
    wildKanaLevels: [18, 24],
    encounters: 8,
    antagonist: 'kali',
    puzzleId: 'find_strongest',
    connections: ['cathedral', 'desert', 'abyss'],
    religiousTheme: 'Induismo',
    philosophy: 'Brahman, Atman, Maya. Il ciclo degli Yuga. La danza cosmica di Shiva.'
  },
  {
    id: 'abyss',
    name: 'L\'Abisso',
    description: 'Oscurità totale. Qui Nietzsche guardò, e qui dimorano i kana più potenti e terribili.',
    color: '#1f2937',
    ambientColor: '#374151',
    groundColor: '#111827',
    requiredLevel: 22,
    wildKanaLevels: [22, 26],
    encounters: 8,
    puzzleId: 'max_depth',
    connections: ['temple', 'mountain', 'final'],
    religiousTheme: 'Nihilismo / Esistenzialismo',
    philosophy: 'Dio è morto. L\'abisso. L\'oltreuomo. La libertà angosciosa di Sartre e Kierkegaard.'
  },
  {
    id: 'final',
    name: 'Il Santuario Finale',
    description: 'Dove tutte le verità convergono. Il centro di tutto. L\'alfa e l\'omega.',
    color: '#e879f9',
    ambientColor: '#fae8ff',
    groundColor: '#86198f',
    requiredLevel: 25,
    wildKanaLevels: [25, 26],
    encounters: 5,
    puzzleId: 'palindrome',
    connections: ['abyss'],
    religiousTheme: 'Sincretismo / Trascendenza',
    philosophy: 'Tutte le strade portano alla verità? O la verità è oltre ogni strada?'
  },
];

export function getArea(id: string): Area | undefined {
  return areas.find(a => a.id === id);
}

export function getAvailableAreas(playerLevel: number): Area[] {
  return areas.filter(a => a.requiredLevel <= playerLevel);
}
