// Tutti i kana giapponesi - Hiragana e Katakana con statistiche

export interface Kana {
  id: string;
  hiragana: string;
  katakana: string;
  romaji: string;
  type: 'vowel' | 'consonant' | 'combination';
  element: 'fuoco' | 'acqua' | 'terra' | 'aria' | 'spirito' | 'vuoto';
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  special: string;
  description: string;
  level: number;
}

export const allKana: Kana[] = [
  // Vowels - 母音
  { id: 'a', hiragana: 'あ', katakana: 'ア', romaji: 'a', type: 'vowel', element: 'spirito', hp: 45, attack: 30, defense: 25, speed: 40, special: 'Origine Primordiale', description: 'Il primo suono, l\'inizio di tutto. Come il Verbo di Giovanni: "In principio era il Verbo"', level: 1 },
  { id: 'i', hiragana: 'い', katakana: 'イ', romaji: 'i', type: 'vowel', element: 'acqua', hp: 40, attack: 35, defense: 30, speed: 45, special: 'Flusso Cosciente', description: 'Scorre come il fiume della coscienza nel Buddismo', level: 1 },
  { id: 'u', hiragana: 'う', katakana: 'ウ', romaji: 'u', type: 'vowel', element: 'terra', hp: 55, attack: 25, defense: 40, speed: 30, special: 'Radicamento', description: 'Solido come la fede che muove le montagne', level: 1 },
  { id: 'e', hiragana: 'え', katakana: 'エ', romaji: 'e', type: 'vowel', element: 'fuoco', hp: 35, attack: 45, defense: 20, speed: 50, special: 'Fiamma Sacra', description: 'Ardente come il fuoco dello Spirito Santo', level: 1 },
  { id: 'o', hiragana: 'お', katakana: 'オ', romaji: 'o', type: 'vowel', element: 'vuoto', hp: 50, attack: 35, defense: 35, speed: 35, special: 'Cerchio Zen', description: 'Il cerchio ensō, perfezione e vuoto', level: 1 },

  // K-row
  { id: 'ka', hiragana: 'か', katakana: 'カ', romaji: 'ka', type: 'consonant', element: 'fuoco', hp: 50, attack: 40, defense: 30, speed: 35, special: 'Karma Ardente', description: 'Il karma che brucia e purifica', level: 2 },
  { id: 'ki', hiragana: 'き', katakana: 'キ', romaji: 'ki', type: 'consonant', element: 'aria', hp: 40, attack: 35, defense: 25, speed: 55, special: 'Ki Vitale', description: 'L\'energia vitale che scorre nell\'universo', level: 2 },
  { id: 'ku', hiragana: 'く', katakana: 'ク', romaji: 'ku', type: 'consonant', element: 'vuoto', hp: 45, attack: 30, defense: 35, speed: 40, special: 'Śūnyatā', description: 'Il vuoto fondamentale del Buddismo Mahayana', level: 2 },
  { id: 'ke', hiragana: 'け', katakana: 'ケ', romaji: 'ke', type: 'consonant', element: 'terra', hp: 55, attack: 35, defense: 45, speed: 25, special: 'Kenshō', description: 'Vedere la propria natura essenziale', level: 2 },
  { id: 'ko', hiragana: 'こ', katakana: 'コ', romaji: 'ko', type: 'consonant', element: 'spirito', hp: 48, attack: 38, defense: 32, speed: 38, special: 'Kokoro', description: 'Il cuore-mente, centro dell\'essere', level: 2 },

  // S-row
  { id: 'sa', hiragana: 'さ', katakana: 'サ', romaji: 'sa', type: 'consonant', element: 'acqua', hp: 42, attack: 38, defense: 28, speed: 48, special: 'Samsara', description: 'Il ciclo infinito di nascita e morte', level: 3 },
  { id: 'shi', hiragana: 'し', katakana: 'シ', romaji: 'shi', type: 'consonant', element: 'spirito', hp: 38, attack: 42, defense: 25, speed: 52, special: 'Shinrone', description: 'La fede pura nel Buddismo della Terra Pura', level: 3 },
  { id: 'su', hiragana: 'す', katakana: 'ス', romaji: 'su', type: 'consonant', element: 'vuoto', hp: 50, attack: 30, defense: 40, speed: 35, special: 'Sūtra', description: 'Le scritture sacre che illuminano', level: 3 },
  { id: 'se', hiragana: 'せ', katakana: 'セ', romaji: 'se', type: 'consonant', element: 'terra', hp: 55, attack: 32, defense: 45, speed: 28, special: 'Sekai', description: 'Il mondo fenomenico, maya e illusione', level: 3 },
  { id: 'so', hiragana: 'そ', katakana: 'ソ', romaji: 'so', type: 'consonant', element: 'aria', hp: 40, attack: 36, defense: 30, speed: 50, special: 'Satori', description: 'Il risveglio improvviso', level: 3 },

  // T-row
  { id: 'ta', hiragana: 'た', katakana: 'タ', romaji: 'ta', type: 'consonant', element: 'fuoco', hp: 52, attack: 42, defense: 28, speed: 38, special: 'Tathāgata', description: 'Colui che è così venuto, epiteto del Buddha', level: 4 },
  { id: 'chi', hiragana: 'ち', katakana: 'チ', romaji: 'chi', type: 'consonant', element: 'terra', hp: 48, attack: 35, defense: 42, speed: 32, special: 'Chikō', description: 'La saggezza che discrimina', level: 4 },
  { id: 'tsu', hiragana: 'つ', katakana: 'ツ', romaji: 'tsu', type: 'consonant', element: 'acqua', hp: 44, attack: 38, defense: 34, speed: 44, special: 'Tsunami Sacro', description: 'L\'onda che purifica come il battesimo', level: 4 },
  { id: 'te', hiragana: 'て', katakana: 'テ', romaji: 'te', type: 'consonant', element: 'aria', hp: 38, attack: 40, defense: 26, speed: 52, special: 'Tegina', description: 'La mano che guida, come la mano di Dio', level: 4 },
  { id: 'to', hiragana: 'と', katakana: 'ト', romaji: 'to', type: 'consonant', element: 'spirito', hp: 46, attack: 36, defense: 36, speed: 40, special: 'Tō', description: 'La porta verso l\'illuminazione', level: 4 },

  // N-row
  { id: 'na', hiragana: 'な', katakana: 'ナ', romaji: 'na', type: 'consonant', element: 'terra', hp: 54, attack: 32, defense: 44, speed: 28, special: 'Nirvana', description: 'L\'estinzione del desiderio, la pace ultima', level: 5 },
  { id: 'ni', hiragana: 'に', katakana: 'ニ', romaji: 'ni', type: 'consonant', element: 'acqua', hp: 42, attack: 36, defense: 32, speed: 46, special: 'Nianfo', description: 'La recitazione del nome di Buddha', level: 5 },
  { id: 'nu', hiragana: 'ぬ', katakana: 'ヌ', romaji: 'nu', type: 'consonant', element: 'vuoto', hp: 40, attack: 34, defense: 30, speed: 42, special: 'Nūru', description: 'La luce divina dell\'Islam, An-Nūr', level: 5 },
  { id: 'ne', hiragana: 'ね', katakana: 'ネ', romaji: 'ne', type: 'consonant', element: 'spirito', hp: 46, attack: 38, defense: 34, speed: 40, special: 'Nehan', description: 'Il Nirvana giapponese, liberazione finale', level: 5 },
  { id: 'no', hiragana: 'の', katakana: 'ノ', romaji: 'no', type: 'consonant', element: 'aria', hp: 38, attack: 40, defense: 28, speed: 50, special: 'No-self', description: 'Anattā, la non-esistenza del sé', level: 5 },

  // H-row
  { id: 'ha', hiragana: 'は', katakana: 'ハ', romaji: 'ha', type: 'consonant', element: 'spirito', hp: 48, attack: 40, defense: 30, speed: 42, special: 'Halelujah', description: 'Lodate il Signore, eco del divino', level: 6 },
  { id: 'hi', hiragana: 'ひ', katakana: 'ヒ', romaji: 'hi', type: 'consonant', element: 'fuoco', hp: 42, attack: 45, defense: 25, speed: 48, special: 'Hi no Kami', description: 'Il dio del fuoco shintoista', level: 6 },
  { id: 'fu', hiragana: 'ふ', katakana: 'フ', romaji: 'fu', type: 'consonant', element: 'aria', hp: 40, attack: 35, defense: 30, speed: 55, special: 'Fūjin', description: 'Il dio del vento nella mitologia giapponese', level: 6 },
  { id: 'he', hiragana: 'へ', katakana: 'ヘ', romaji: 'he', type: 'consonant', element: 'terra', hp: 52, attack: 30, defense: 42, speed: 32, special: 'Heiwa', description: 'La pace, shalom, salam, pace interiore', level: 6 },
  { id: 'ho', hiragana: 'ほ', katakana: 'ホ', romaji: 'ho', type: 'consonant', element: 'acqua', hp: 44, attack: 36, defense: 36, speed: 40, special: 'Hotoke', description: 'Il Buddha, l\'illuminato', level: 6 },

  // M-row
  { id: 'ma', hiragana: 'ま', katakana: 'マ', romaji: 'ma', type: 'consonant', element: 'vuoto', hp: 46, attack: 34, defense: 38, speed: 36, special: 'Māyā', description: 'L\'illusione cosmica dell\'Induismo', level: 7 },
  { id: 'mi', hiragana: 'み', katakana: 'ミ', romaji: 'mi', type: 'consonant', element: 'acqua', hp: 44, attack: 38, defense: 32, speed: 44, special: 'Mizu Baptism', description: 'L\'acqua battesimale che purifica', level: 7 },
  { id: 'mu', hiragana: 'む', katakana: 'ム', romaji: 'mu', type: 'consonant', element: 'vuoto', hp: 50, attack: 30, defense: 45, speed: 30, special: 'Mu', description: 'Il nulla, il non-essere del Tao e dello Zen', level: 7 },
  { id: 'me', hiragana: 'め', katakana: 'メ', romaji: 'me', type: 'consonant', element: 'spirito', hp: 42, attack: 40, defense: 28, speed: 48, special: 'Meikyu', description: 'Il labirinto dell\'esistenza', level: 7 },
  { id: 'mo', hiragana: 'も', katakana: 'モ', romaji: 'mo', type: 'consonant', element: 'terra', hp: 54, attack: 32, defense: 44, speed: 26, special: 'Moksha', description: 'La liberazione dal ciclo delle rinascite', level: 7 },

  // Y-row
  { id: 'ya', hiragana: 'や', katakana: 'ヤ', romaji: 'ya', type: 'consonant', element: 'fuoco', hp: 46, attack: 42, defense: 28, speed: 44, special: 'Yahweh', description: 'Il nome ineffabile di Dio, YHWH', level: 8 },
  { id: 'yu', hiragana: 'ゆ', katakana: 'ユ', romaji: 'yu', type: 'consonant', element: 'acqua', hp: 44, attack: 36, defense: 34, speed: 42, special: 'Yuga', description: 'L\'era cosmica dell\'Induismo', level: 8 },
  { id: 'yo', hiragana: 'よ', katakana: 'ヨ', romaji: 'yo', type: 'consonant', element: 'spirito', hp: 48, attack: 38, defense: 36, speed: 38, special: 'Yōsei', description: 'Lo spirito della natura nello Shinto', level: 8 },

  // R-row
  { id: 'ra', hiragana: 'ら', katakana: 'ラ', romaji: 'ra', type: 'consonant', element: 'fuoco', hp: 50, attack: 44, defense: 26, speed: 46, special: 'Rahman', description: 'Ar-Rahman, il Misericordioso dell\'Islam', level: 9 },
  { id: 'ri', hiragana: 'り', katakana: 'リ', romaji: 'ri', type: 'consonant', element: 'aria', hp: 38, attack: 38, defense: 28, speed: 54, special: 'Rinnascita', description: 'La reincarnazione, samsara', level: 9 },
  { id: 'ru', hiragana: 'る', katakana: 'ル', romaji: 'ru', type: 'consonant', element: 'terra', hp: 52, attack: 34, defense: 42, speed: 30, special: 'Rūḥ', description: 'Lo spirito nell\'Islam, il soffio divino', level: 9 },
  { id: 're', hiragana: 'れ', katakana: 'レ', romaji: 're', type: 'consonant', element: 'spirito', hp: 44, attack: 40, defense: 32, speed: 44, special: 'Resurrezione', description: 'La rinascita in Cristo', level: 9 },
  { id: 'ro', hiragana: 'ろ', katakana: 'ロ', romaji: 'ro', type: 'consonant', element: 'vuoto', hp: 46, attack: 36, defense: 36, speed: 38, special: 'Rōdō', description: 'Il lavoro come preghiera, ora et labora', level: 9 },

  // W-row
  { id: 'wa', hiragana: 'わ', katakana: 'ワ', romaji: 'wa', type: 'consonant', element: 'spirito', hp: 50, attack: 38, defense: 38, speed: 38, special: 'Wa', description: 'L\'armonia, principio fondamentale giapponese', level: 10 },
  { id: 'wo', hiragana: 'を', katakana: 'ヲ', romaji: 'wo', type: 'consonant', element: 'acqua', hp: 44, attack: 34, defense: 34, speed: 44, special: 'Wu Wei', description: 'Il non-agire del Taoismo', level: 10 },

  // N
  { id: 'n', hiragana: 'ん', katakana: 'ン', romaji: 'n', type: 'consonant', element: 'vuoto', hp: 60, attack: 30, defense: 50, speed: 25, special: 'Om', description: 'Il suono primordiale, AUM, l\'origine di tutto', level: 10 },

  // Dakuten (voiced) - G row
  { id: 'ga', hiragana: 'が', katakana: 'ガ', romaji: 'ga', type: 'consonant', element: 'terra', hp: 58, attack: 42, defense: 38, speed: 30, special: 'Ganar', description: 'La perseveranza del bodhisattva', level: 11 },
  { id: 'gi', hiragana: 'ぎ', katakana: 'ギ', romaji: 'gi', type: 'consonant', element: 'acqua', hp: 48, attack: 38, defense: 36, speed: 40, special: 'Giri', description: 'Il dovere, l\'onore del samurai', level: 11 },
  { id: 'gu', hiragana: 'ぐ', katakana: 'グ', romaji: 'gu', type: 'consonant', element: 'vuoto', hp: 52, attack: 34, defense: 44, speed: 28, special: 'Gufu', description: 'La carità, il dono compassionevole', level: 11 },
  { id: 'ge', hiragana: 'げ', katakana: 'ゲ', romaji: 'ge', type: 'consonant', element: 'fuoco', hp: 44, attack: 44, defense: 28, speed: 46, special: 'Gehenna', description: 'Il fuoco purificatore', level: 11 },
  { id: 'go', hiragana: 'ご', katakana: 'ゴ', romaji: 'go', type: 'consonant', element: 'spirito', hp: 50, attack: 40, defense: 36, speed: 36, special: 'Gongyo', description: 'La pratica修行, disciplina spirituale', level: 11 },

  // Z row
  { id: 'za', hiragana: 'ざ', katakana: 'ザ', romaji: 'za', type: 'consonant', element: 'aria', hp: 42, attack: 40, defense: 30, speed: 50, special: 'Zazen', description: 'La meditazione seduta, cuore dello Zen', level: 12 },
  { id: 'ji', hiragana: 'じ', katakana: 'ジ', romaji: 'ji', type: 'consonant', element: 'spirito', hp: 46, attack: 42, defense: 32, speed: 44, special: 'Jihad', description: 'La lotta interiore contro il proprio ego', level: 12 },
  { id: 'zu', hiragana: 'ず', katakana: 'ズ', romaji: 'zu', type: 'consonant', element: 'terra', hp: 54, attack: 36, defense: 42, speed: 30, special: 'Zugai', description: 'Il peccato originale, la caduta', level: 12 },
  { id: 'ze', hiragana: 'ぜ', katakana: 'ゼ', romaji: 'ze', type: 'consonant', element: 'fuoco', hp: 40, attack: 46, defense: 24, speed: 52, special: 'Zeal', description: 'Lo zelo del martire, fede ardente', level: 12 },
  { id: 'zo', hiragana: 'ぞ', katakana: 'ゾ', romaji: 'zo', type: 'consonant', element: 'vuoto', hp: 48, attack: 38, defense: 38, speed: 36, special: 'Zohar', description: 'Lo splendore della Kabbalah ebraica', level: 12 },

  // D row
  { id: 'da', hiragana: 'だ', katakana: 'ダ', romaji: 'da', type: 'consonant', element: 'fuoco', hp: 50, attack: 44, defense: 30, speed: 42, special: 'Dharma', description: 'La legge cosmica, l\'insegnamento del Buddha', level: 13 },
  { id: 'di', hiragana: 'ぢ', katakana: 'ヂ', romaji: 'di', type: 'consonant', element: 'acqua', hp: 44, attack: 38, defense: 34, speed: 44, special: 'Dhyāna', description: 'La contemplazione, origine della parola Zen', level: 13 },
  { id: 'du', hiragana: 'づ', katakana: 'ヅ', romaji: 'du', type: 'consonant', element: 'terra', hp: 52, attack: 36, defense: 44, speed: 28, special: 'Dukkha', description: 'La sofferenza, prima nobile verità', level: 13 },
  { id: 'de', hiragana: 'で', katakana: 'デ', romaji: 'de', type: 'consonant', element: 'spirito', hp: 46, attack: 40, defense: 34, speed: 40, special: 'Deus', description: 'Dio, il creatore di tutte le cose', level: 13 },
  { id: 'do', hiragana: 'ど', katakana: 'ド', romaji: 'do', type: 'consonant', element: 'vuoto', hp: 48, attack: 38, defense: 38, speed: 36, special: 'Dō', description: 'La Via, il Tao, il cammino', level: 13 },

  // B row
  { id: 'ba', hiragana: 'ば', katakana: 'バ', romaji: 'ba', type: 'consonant', element: 'acqua', hp: 46, attack: 38, defense: 36, speed: 42, special: 'Bodhi', description: 'Il risveglio, l\'illuminazione sotto l\'albero', level: 14 },
  { id: 'bi', hiragana: 'び', katakana: 'ビ', romaji: 'bi', type: 'consonant', element: 'spirito', hp: 44, attack: 42, defense: 30, speed: 46, special: 'Bīsmillah', description: 'Nel nome di Dio, inizio di ogni azione', level: 14 },
  { id: 'bu', hiragana: 'ぶ', katakana: 'ブ', romaji: 'bu', type: 'consonant', element: 'terra', hp: 54, attack: 34, defense: 46, speed: 26, special: 'Bushidō', description: 'La via del guerriero, codice d\'onore', level: 14 },
  { id: 'be', hiragana: 'べ', katakana: 'ベ', romaji: 'be', type: 'consonant', element: 'fuoco', hp: 40, attack: 46, defense: 24, speed: 52, special: 'Bethel', description: 'La casa di Dio, luogo sacro', level: 14 },
  { id: 'bo', hiragana: 'ぼ', katakana: 'ボ', romaji: 'bo', type: 'consonant', element: 'vuoto', hp: 50, attack: 36, defense: 40, speed: 34, special: 'Bodhisattva', description: 'Colui che rinuncia al nirvana per salvare tutti', level: 14 },

  // P row
  { id: 'pa', hiragana: 'ぱ', katakana: 'パ', romaji: 'pa', type: 'consonant', element: 'fuoco', hp: 42, attack: 48, defense: 22, speed: 54, special: 'Paradiso', description: 'Il giardino dell\'Eden, Jannah', level: 15 },
  { id: 'pi', hiragana: 'ぴ', katakana: 'ピ', romaji: 'pi', type: 'consonant', element: 'aria', hp: 38, attack: 44, defense: 26, speed: 56, special: 'Prajñā', description: 'La saggezza trascendentale', level: 15 },
  { id: 'pu', hiragana: 'ぷ', katakana: 'プ', romaji: 'pu', type: 'consonant', element: 'spirito', hp: 48, attack: 36, defense: 38, speed: 38, special: 'Puja', description: 'Il culto, la devozione induista', level: 15 },
  { id: 'pe', hiragana: 'ぺ', katakana: 'ペ', romaji: 'pe', type: 'consonant', element: 'acqua', hp: 44, attack: 40, defense: 32, speed: 46, special: 'Pietà', description: 'La misericordia divina, Rahma', level: 15 },
  { id: 'po', hiragana: 'ぽ', katakana: 'ポ', romaji: 'po', type: 'consonant', element: 'terra', hp: 52, attack: 34, defense: 44, speed: 30, special: 'Polemone', description: 'Il guerriero della fede, miles Christi', level: 15 },

  // Combinations (Yōon)
  { id: 'kya', hiragana: 'きゃ', katakana: 'キャ', romaji: 'kya', type: 'combination', element: 'fuoco', hp: 55, attack: 48, defense: 32, speed: 45, special: 'Kyōten', description: 'I sutra, scritture sacre buddiste', level: 16 },
  { id: 'kyu', hiragana: 'きゅ', katakana: 'キュ', romaji: 'kyu', type: 'combination', element: 'vuoto', hp: 50, attack: 42, defense: 38, speed: 40, special: 'Kyūsho', description: 'Il punto vitale, la via dell\'illuminazione', level: 16 },
  { id: 'kyo', hiragana: 'きょ', katakana: 'キョ', romaji: 'kyo', type: 'combination', element: 'spirito', hp: 52, attack: 44, defense: 36, speed: 42, special: 'Kyōgai', description: 'Il regno dell\'illuminazione', level: 16 },
  { id: 'sha', hiragana: 'しゃ', katakana: 'シャ', romaji: 'sha', type: 'combination', element: 'acqua', hp: 48, attack: 40, defense: 36, speed: 44, special: 'Sharia', description: 'La legge divina dell\'Islam', level: 17 },
  { id: 'shu', hiragana: 'しゅ', katakana: 'シュ', romaji: 'shu', type: 'combination', element: 'terra', hp: 54, attack: 38, defense: 42, speed: 34, special: 'Shugyō', description: 'L\'ascesi, la pratica spirituale severa', level: 17 },
  { id: 'sho', hiragana: 'しょ', katakana: 'ショ', romaji: 'sho', type: 'combination', element: 'spirito', hp: 50, attack: 44, defense: 34, speed: 42, special: 'Shōmatsu', description: 'L\'escatologia, la fine dei tempi', level: 17 },
  { id: 'cha', hiragana: 'ちゃ', katakana: 'チャ', romaji: 'cha', type: 'combination', element: 'aria', hp: 44, attack: 42, defense: 30, speed: 50, special: 'Chakra', description: 'I centri energetici dell\'Induismo', level: 18 },
  { id: 'chu', hiragana: 'ちゅ', katakana: 'チュ', romaji: 'chu', type: 'combination', element: 'fuoco', hp: 46, attack: 46, defense: 28, speed: 48, special: 'Chūdō', description: 'La via di mezzo, Madhyamaka', level: 18 },
  { id: 'cho', hiragana: 'ちょ', katakana: 'チョ', romaji: 'cho', type: 'combination', element: 'vuoto', hp: 48, attack: 40, defense: 38, speed: 40, special: 'Chōwa', description: 'L\'armonia universale', level: 18 },
  { id: 'nya', hiragana: 'にゃ', katakana: 'ニャ', romaji: 'nya', type: 'combination', element: 'spirito', hp: 46, attack: 38, defense: 34, speed: 46, special: 'Nyāya', description: 'La logica, filosofia indiana', level: 19 },
  { id: 'nyu', hiragana: 'にゅ', katakana: 'ニュ', romaji: 'nyu', type: 'combination', element: 'acqua', hp: 44, attack: 36, defense: 36, speed: 44, special: 'Nyanbo', description: 'La concentrazione, samādhi', level: 19 },
  { id: 'nyo', hiragana: 'にょ', katakana: 'ニョ', romaji: 'nyo', type: 'combination', element: 'terra', hp: 50, attack: 34, defense: 42, speed: 34, special: 'Nyoirin', description: 'Il gioiello che esaudisce i desideri', level: 19 },
  { id: 'hya', hiragana: 'ひゃ', katakana: 'ヒャ', romaji: 'hya', type: 'combination', element: 'fuoco', hp: 48, attack: 46, defense: 30, speed: 46, special: 'Hyakume', description: 'I cento occhi della saggezza', level: 20 },
  { id: 'hyu', hiragana: 'ひゅ', katakana: 'ヒュ', romaji: 'hyu', type: 'combination', element: 'aria', hp: 42, attack: 42, defense: 28, speed: 52, special: 'Hyōshi', description: 'Il momento presente, l\'eterno ora', level: 20 },
  { id: 'hyo', hiragana: 'ひょ', katakana: 'ヒョ', romaji: 'hyo', type: 'combination', element: 'vuoto', hp: 46, attack: 40, defense: 36, speed: 42, special: 'Hyōden', description: 'Il tempio della verità', level: 20 },
  { id: 'mya', hiragana: 'みゃ', katakana: 'ミャ', romaji: 'mya', type: 'combination', element: 'spirito', hp: 50, attack: 42, defense: 36, speed: 40, special: 'Myōhō', description: 'La legge mistica del Lotus Sutra', level: 21 },
  { id: 'myu', hiragana: 'みゅ', katakana: 'ミュ', romaji: 'myu', type: 'combination', element: 'acqua', hp: 46, attack: 38, defense: 38, speed: 42, special: 'Myūzu', description: 'Il mistero, il sacramento', level: 21 },
  { id: 'myo', hiragana: 'みょ', katakana: 'ミョ', romaji: 'myo', type: 'combination', element: 'terra', hp: 52, attack: 36, defense: 44, speed: 32, special: 'Myōō', description: 'I re della saggezza, divinità buddiste', level: 21 },
  { id: 'rya', hiragana: 'りゃ', katakana: 'リャ', romaji: 'rya', type: 'combination', element: 'fuoco', hp: 48, attack: 44, defense: 32, speed: 46, special: 'Ryōiki', description: 'Il regno spirituale', level: 22 },
  { id: 'ryu', hiragana: 'りゅ', katakana: 'リュ', romaji: 'ryu', type: 'combination', element: 'acqua', hp: 50, attack: 40, defense: 38, speed: 40, special: 'Ryūjin', description: 'Il dio drago del mare', level: 22 },
  { id: 'ryo', hiragana: 'りょ', katakana: 'リョ', romaji: 'ryo', type: 'combination', element: 'spirito', hp: 52, attack: 42, defense: 38, speed: 38, special: 'Ryōzen', description: 'La montagna sacra della meditazione', level: 22 },
  { id: 'gya', hiragana: 'ぎゃ', katakana: 'ギャ', romaji: 'gya', type: 'combination', element: 'terra', hp: 56, attack: 44, defense: 40, speed: 32, special: 'Gyakujō', description: 'La purezza inversa, paradosso Zen', level: 23 },
  { id: 'gyu', hiragana: 'ぎゅ', katakana: 'ギュ', romaji: 'gyu', type: 'combination', element: 'vuoto', hp: 50, attack: 40, defense: 42, speed: 36, special: 'Gyūnyū', description: 'L\'ingresso nel vuoto assoluto', level: 23 },
  { id: 'gyo', hiragana: 'ぎょ', katakana: 'ギョ', romaji: 'gyo', type: 'combination', element: 'spirito', hp: 52, attack: 42, defense: 38, speed: 38, special: 'Gyōja', description: 'L\'asceta, colui che pratica', level: 23 },
  { id: 'ja', hiragana: 'じゃ', katakana: 'ジャ', romaji: 'ja', type: 'combination', element: 'fuoco', hp: 46, attack: 48, defense: 28, speed: 48, special: 'Jātaka', description: 'Le storie delle vite precedenti del Buddha', level: 24 },
  { id: 'ju', hiragana: 'じゅ', katakana: 'ジュ', romaji: 'ju', type: 'combination', element: 'aria', hp: 44, attack: 44, defense: 30, speed: 50, special: 'Jūrin', description: 'La ruota del Dharma che gira', level: 24 },
  { id: 'jo', hiragana: 'じょ', katakana: 'ジョ', romaji: 'jo', type: 'combination', element: 'acqua', hp: 48, attack: 40, defense: 36, speed: 42, special: 'Jōdo', description: 'La Terra Pura di Amida Buddha', level: 24 },
  { id: 'bya', hiragana: 'びゃ', katakana: 'ビャ', romaji: 'bya', type: 'combination', element: 'spirito', hp: 50, attack: 44, defense: 36, speed: 40, special: 'Byakue', description: 'La veste bianca della purezza', level: 25 },
  { id: 'byu', hiragana: 'びゅ', katakana: 'ビュ', romaji: 'byu', type: 'combination', element: 'vuoto', hp: 48, attack: 40, defense: 40, speed: 38, special: 'Byōdō', description: 'L\'uguaglianza, principio buddista', level: 25 },
  { id: 'byo', hiragana: 'びょ', katakana: 'ビョ', romaji: 'byo', type: 'combination', element: 'terra', hp: 54, attack: 38, defense: 44, speed: 30, special: 'Byōbu', description: 'Il paravento che separa i mondi', level: 25 },
  { id: 'pya', hiragana: 'ぴゃ', katakana: 'ピャ', romaji: 'pya', type: 'combination', element: 'fuoco', hp: 44, attack: 50, defense: 24, speed: 54, special: 'Pyramis', description: 'La piramide, ascensione verso il divino', level: 26 },
  { id: 'pyu', hiragana: 'ぴゅ', katakana: 'ピュ', romaji: 'pyu', type: 'combination', element: 'aria', hp: 40, attack: 46, defense: 26, speed: 56, special: 'Purusha', description: 'Lo spirito cosmico dell\'Induismo', level: 26 },
  { id: 'pyo', hiragana: 'ぴょ', katakana: 'ピョ', romaji: 'pyo', type: 'combination', element: 'spirito', hp: 48, attack: 44, defense: 34, speed: 44, special: 'Pythia', description: 'L\'oracolo, voce del divino', level: 26 },
];

export const elementChart: Record<string, Record<string, number>> = {
  fuoco: { fuoco: 0.5, acqua: 0.5, terra: 2, aria: 1, spirito: 1, vuoto: 1.5 },
  acqua: { fuoco: 2, acqua: 0.5, terra: 0.5, aria: 1, spirito: 1.5, vuoto: 1 },
  terra: { fuoco: 0.5, acqua: 2, terra: 0.5, aria: 0.5, spirito: 1, vuoto: 2 },
  aria: { fuoco: 1, acqua: 1, terra: 2, aria: 0.5, spirito: 1.5, vuoto: 1 },
  spirito: { fuoco: 1, acqua: 0.5, terra: 1, aria: 0.5, spirito: 0.5, vuoto: 2 },
  vuoto: { fuoco: 0.5, acqua: 1, terra: 0.5, aria: 1, spirito: 0.5, vuoto: 0.5 },
};

export function getWildKanaForArea(areaId: string, playerLevel: number): Kana[] {
  const areaKanaMap: Record<string, number[]> = {
    genesis: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    cathedral: [11, 12, 13, 14, 15, 56, 57, 58, 59, 60],
    temple: [16, 17, 18, 19, 20, 61, 62, 63, 64, 65],
    mosque: [21, 22, 23, 24, 25, 66, 67, 68, 69, 70],
    garden: [26, 27, 28, 29, 30, 71, 72, 73, 74, 75],
    desert: [31, 32, 33, 34, 35, 76, 77, 78, 79, 80],
    mountain: [36, 37, 38, 39, 40, 81, 82, 83, 84, 85],
    abyss: [41, 42, 43, 44, 45, 86, 87, 88, 89, 90],
    final: [46, 47, 48, 49, 50, 51, 52, 53, 54, 55],
  };

  const indices = areaKanaMap[areaId] || areaKanaMap.genesis;
  const available = indices.map(i => allKana[i - 1]).filter(k => k.level <= playerLevel + 3);
  return available.length > 0 ? available : allKana.slice(0, 5);
}
