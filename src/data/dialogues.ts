export interface DialogueLine {
  speaker: string;
  text: string;
  emotion?: string;
}

export interface DialogueScene {
  id: string;
  trigger: string;
  lines: DialogueLine[];
  afterAction?: () => void;
}

export const introDialogue: DialogueLine[] = [
  { speaker: 'Narratore', text: 'Nel principio era il Suono. E il Suono era con i Kana, e il Suono era i Kana.' },
  { speaker: 'Narratore', text: 'Come nel Vangelo di Giovanni, così nel mondo dei Kana: tutto fu fatto per mezzo loro.' },
  { speaker: 'Professore Arata', text: 'Benvenuto nel mondo dei Kana, giovane cercatore. Io sono il Professor Arata, studioso delle scritture.' },
  { speaker: 'Professore Arata', text: 'Qui, ogni kana — hiragana e katakana — è un\'entità vivente, un frammento della verità cosmica.' },
  { speaker: 'Professore Arata', text: 'Come disse Lao Tzu nel Tao Te Ching: "Il Tao che può essere detto non è l\'eterno Tao".' },
  { speaker: 'Professore Arata', text: 'Eppure noi cerchiamo di comprendere, di catturare, di far combattere questi spiriti del linguaggio.' },
  { speaker: 'Professore Arata', text: 'Il Corano dice: "E insegnò ad Adamo tutti i nomi" (2:31). Anche tu devi imparare i nomi dei Kana.' },
  { speaker: 'Professore Arata', text: 'Scegli il tuo primo compagno. Ricorda: nel Buddismo, ogni scelta è un atto di karma.' },
  { speaker: 'Professore Arata', text: 'あ (A) - Lo spirito dell\'origine, il Verbo primordiale' },
  { speaker: 'Professore Arata', text: 'か (Ka) - Il karma ardente, la legge di causa ed effetto' },
  { speaker: 'Professore Arata', text: 'さ (Sa) - Il samsara, il ciclo eterno della rinascita' },
];

export const antagonistDialogues: Record<string, DialogueLine[]> = {
  cristoforo: [
    { speaker: 'Fra Cristoforo', text: 'Fermati, eretico! Io sono Fra Cristoforo, servitore della Vera Luce!' },
    { speaker: 'Fra Cristoforo', text: 'I Kana sono stati corrotti dal peccato originale. Come la Genesi narra, la caduta ha contaminato tutto.' },
    { speaker: 'Fra Cristoforo', text: 'Solo attraverso la purificazione del fuoco — Gehenna, se necessario — i Kana torneranno alla grazia.' },
    { speaker: 'Fra Cristoforo', text: 'Sant\'Agostino scrisse: "Extra Ecclesiam nulla salus". Fuori dalla mia chiesa, nessuna salvezza per questi spiriti!' },
    { speaker: 'Fra Cristoforo', text: 'La Riforma protestante ha dimostrato che la verità non appartiene a una sola istituzione... ma io SONO l\'istituzione!' },
    { speaker: 'Fra Cristoforo', text: 'Come Torquemada prima di me, porterò la luce dove c\'è oscurità. Preparati alla battaglia!' },
    { speaker: 'Tu', text: 'La fede non dovrebbe imporre, ma illuminare. Come disse San Francesco: "Predicate sempre il Vangelo, e se necessario usate le parole".' },
    { speaker: 'Fra Cristoforo', text: 'Parole vuote di un debole! La Verità è una spada, non una carezza! Deuteronomio 13: "Non ascolterai né lo seguirai"!' },
  ],
  bodhi: [
    { speaker: 'Monaco Bodhi', text: '...Silenzio. Ascolta il vento. Senti? È il suono del nulla che parla.' },
    { speaker: 'Monaco Bodhi', text: 'Io sono Bodhi, colui che ha visto sotto l\'albero. Ho compreso la vacuità di tutte le cose.' },
    { speaker: 'Monaco Bodhi', text: 'Tu cerchi di catturare i Kana, di possederli. Ma il possesso è attaccamento, e l\'attaccamento è sofferenza.' },
    { speaker: 'Monaco Bodhi', text: 'Il Buddha disse nel Dhammapada: "L\'odio non cessa con l\'odio, ma con l\'amore sola-mente".' },
    { speaker: 'Monaco Bodhi', text: 'Tuttavia... il mio errore è diverso. Io voglio liberare i Kana dall\'esistenza stessa.' },
    { speaker: 'Monaco Bodhi', text: 'Se tutto è vuoto, come dice Nāgārjuna nel Mūlamadhyamakakārikā, allora la liberazione è la non-esistenza.' },
    { speaker: 'Monaco Bodhi', text: 'Distruggerò ogni kana per portarli nel Nirvana assoluto. Nessuna rinascita, nessun dolore.' },
    { speaker: 'Tu', text: 'Ma il Buddha insegnò la Via di Mezzo! Né esistenza né non-esistenza. Il Nirvana non è annientamento!' },
    { speaker: 'Monaco Bodhi', text: 'Interessante... ma sbagli. Il cuore-sutra dice: "Forma è vuoto, vuoto è forma". Io porto la conclusione logica.' },
  ],
  rashid: [
    { speaker: 'Al-Rashid', text: 'As-salāmu ʿalaykum, viaggiatore. O dovrei dire... peccatore?' },
    { speaker: 'Al-Rashid', text: 'Io sono Al-Rashid, il ben guidato. Porto la legge divina — la Sharia — a questo mondo caotico.' },
    { speaker: 'Al-Rashid', text: 'I Kana vagano senza ordine, senza legge. Come i jahiliyyah prima dell\'Islam, vivono nell\'ignoranza.' },
    { speaker: 'Al-Rashid', text: 'Ibn Taymiyyah insegnò che la legge divina deve governare ogni aspetto dell\'esistenza.' },
    { speaker: 'Al-Rashid', text: 'Organizzerò i Kana secondo il volere di Allah. Ogni kana al suo posto, come i pianeti nel firmamento.' },
    { speaker: 'Al-Rashid', text: 'Il Corano dice: "Ogni anima gusterà la morte" (3:185). Anche i Kana devono sottomettersi.' },
    { speaker: 'Tu', text: 'Ma l\'Islam stesso insegna: "Non c\'è coercizione nella religione" (2:256). La libertà è sacra!' },
    { speaker: 'Al-Rashid', text: 'Citare il Corano contro di me? Come i mu\'taziliti, usi la ragione dove serve sottomissione!' },
    { speaker: 'Al-Rashid', text: 'La Umma deve essere una. I Kana devono essere ordinati. Preparati!' },
  ],
  kali: [
    { speaker: 'Deva Kali', text: '*risate folli* Ahahaha! Il mondo trema al mio passaggio!' },
    { speaker: 'Deva Kali', text: 'Io sono Kali, la Distruttrice! Come nel Devī Māhātmya, danzo sulla distruzione del cosmo!' },
    { speaker: 'Deva Kali', text: 'Shiva stesso distrugge per ricreare. Ma io... io voglio accelerare il processo!' },
    { speaker: 'Deva Kali', text: 'I Yuga si susseguono: Satya, Treta, Dvapara, e ora il Kali Yuga — l\'era dell\'oscurità!' },
    { speaker: 'Deva Kali', text: 'Come dice la Bhagavad Gita (11.32): "Io sono il Tempo, il grande distruttore dei mondi"!' },
    { speaker: 'Deva Kali', text: 'Distruggerò tutti i Kana affinché Vishnu possa sognare un nuovo universo!' },
    { speaker: 'Tu', text: 'Ma Krishna insegnò ad Arjuna il dharma! La distruzione senza scopo è solo caos!' },
    { speaker: 'Deva Kali', text: 'Il caos è il grembo della creazione! Senza la mia danza, nulla di nuovo può nascere!' },
    { speaker: 'Deva Kali', text: 'Come il Tandava di Shiva, la mia distruzione è sacra! Combattimi se osi!' },
  ],
  lao: [
    { speaker: 'Saggio Lao', text: '...' },
    { speaker: 'Saggio Lao', text: 'Il miglior combattimento è quello che non avviene.' },
    { speaker: 'Saggio Lao', text: 'Sono Lao, e seguo il Tao. Il Tao Te Ching dice: "Chi sa non parla, chi parla non sa".' },
    { speaker: 'Saggio Lao', text: 'Ma paradossalmente, eccomi qui a parlarti. Il paradosso è la porta della verità.' },
    { speaker: 'Saggio Lao', text: 'Voglio che i Kana tornino al wu wei — il non-agire. Che smettano di combattere, di esistere attivamente.' },
    { speaker: 'Saggio Lao', text: 'Zhuangzi sognò di essere una farfalla. Forse i Kana sognano di non essere Kana.' },
    { speaker: 'Saggio Lao', text: 'Liberandoli dall\'azione, li libererò dalla sofferenza dell\'esistenza.' },
    { speaker: 'Tu', text: 'Ma il Tao stesso si manifesta nell\'azione! Il wu wei non è passività, è azione spontanea!' },
    { speaker: 'Saggio Lao', text: 'Ah, conosci il Tao. Allora sai che questa conversazione è già un paradosso. Combattiamo... o non combattiamo.' },
  ],
  rabbi: [
    { speaker: 'Rabbi Ezra', text: 'Shalom. Io sono il Rabbi Ezra, custode della Torah e della Kabbalah.' },
    { speaker: 'Rabbi Ezra', text: 'Le lettere ebraiche — come i vostri Kana — sono i mattoni della creazione. Il Sefer Yetzirah lo insegna.' },
    { speaker: 'Rabbi Ezra', text: 'Dio creò il mondo con 22 lettere. Ogni kana ha un corrispondente nel mistero divino.' },
    { speaker: 'Rabbi Ezra', text: 'Ma voi le usate per combattere! È come usare il Nome Ineffabile per scopi profani!' },
    { speaker: 'Rabbi Ezra', text: 'Il Talmud dice: "Chi distrugge una vita è come se distruggesse un mondo intero" (Sanhedrin 4:5).' },
    { speaker: 'Rabbi Ezra', text: 'Voglio sigillare i Kana nell\'Arca della Saggezza, dove solo i puri potranno accedervi.' },
    { speaker: 'Tu', text: 'Ma la saggezza deve essere condivisa! Il Tikkun Olam — riparare il mondo — richiede partecipazione!' },
    { speaker: 'Rabbi Ezra', text: 'Hai ragione... forse. Ma il mistero deve essere protetto. Mostrami che sei degno!' },
  ],
};

export const areaDialogues: Record<string, DialogueLine[]> = {
  genesis: [
    { speaker: 'Narratore', text: 'Area della Genesi — Dove tutto ebbe inizio. Come il Bereshit ebraico: "In principio".' },
    { speaker: 'Narratore', text: 'I kana qui sono i più deboli, ma i più puri. Come anime appena create.' },
    { speaker: 'Villager', text: 'Dicono che il primo kana — あ — contenga il segreto della creazione stessa.' },
    { speaker: 'Villager', text: 'Come il Logos di Eraclito, il principio razionale che ordina il cosmo.' },
  ],
  cathedral: [
    { speaker: 'Narratore', text: 'La Cattedrale della Luce — Un luogo di fede incrollabile e dubbio tormentato.' },
    { speaker: 'Narratore', text: 'Qui Fra Cristoforo raccoglie seguaci. La sua interpretazione della fede è... rigida.' },
    { speaker: 'Monaco', text: 'Tommaso d\'Aquino disse che la ragione e la fede non sono in conflitto. Ma Fra Cristoforo non è d\'accordo.' },
    { speaker: 'Monaco', text: 'L\'Inquisizione spagnola... i roghi... la riforma... la fede è stata usata per così tanti scopi.' },
    { speaker: 'Pellegrino', text: 'Come dice Pascal: "Il cuore ha le sue ragioni che la ragione non conosce".' },
  ],
  temple: [
    { speaker: 'Narratore', text: 'Il Tempio del Vuoto — Dove la vacuità non è assenza, ma pienezza di possibilità.' },
    { speaker: 'Narratore', text: 'Il Monaco Bodhi medita qui, cercando di comprendere se il nulla sia la risposta finale.' },
    { speaker: 'Monaco', text: 'Dōgen Zenji scrisse nello Shōbōgenzō: "Studiare il sé è dimenticare il sé".' },
    { speaker: 'Monaco', text: 'Ma il Monaco Bodhi ha frainteso. Il vuoto non è distruzione, è interconnessione.' },
    { speaker: 'Pellegrino', text: 'Il Pratītyasamutpāda — l\'origine dipendente — mostra che nulla esiste indipendentemente.' },
  ],
  mosque: [
    { speaker: 'Narratore', text: 'La Moschea della Mezzaluna — Dove la sottomissione a Dio incontra la giustizia umana.' },
    { speaker: 'Narratore', text: 'Al-Rashid cerca di imporre ordine assoluto, ma l\'Islam stesso ha mille sfumature.' },
    { speaker: 'Studioso', text: 'I Sufi dicono: "Dovunque ti volgi, lì è il volto di Dio" (Corano 2:115).' },
    { speaker: 'Studioso', text: 'Rumi cantava: "La porta dell\'amore è aperta a tutti, senza distinzione".' },
    { speaker: 'Pellegrino', text: 'Ma Al-Rashid ha scelto la via del rigore, non della misericordia. Come i Kharijiti dei primi tempi.' },
  ],
  garden: [
    { speaker: 'Narratore', text: 'Il Giardino dell\'Armonia — Dove il Tao scorre come acqua tra le pietre.' },
    { speaker: 'Narratore', text: 'Il Saggio Lao insegna che il miglior modo di governare è non governare affatto.' },
    { speaker: 'Giardiniere', text: 'Ogni pietra in questo giardino è al suo posto senza essere forzata. Wu wei in azione.' },
    { speaker: 'Giardiniere', text: 'Il Liezi racconta di un uomo che imparò a non avere paura. Il segreto? Accettare tutto.' },
    { speaker: 'Pellegrino', text: 'Ma anche il Taoismo ha i suoi estremi. Il wu wei portato all\'eccesso è apatia.' },
  ],
  desert: [
    { speaker: 'Narratore', text: 'Il Deserto della Rivelazione — Dove i profeti hanno camminato e le stelle parlano.' },
    { speaker: 'Narratore', text: 'Qui si incontrano le tradizioni abramitiche: ebraismo, cristianesimo, islam.' },
    { speaker: 'Nomade', text: 'Abramo camminò in questo deserto. Mosè ricevette la Legge. Maometto ebbe le rivelazioni.' },
    { speaker: 'Nomade', text: 'Tutti cercavano la stessa verità, con parole diverse. Come i kana hiragana e katakana.' },
    { speaker: 'Pellegrino', text: 'La Kabbalah, la teologia cristiana, il sufismo... rami dello stesso albero?' },
  ],
  mountain: [
    { speaker: 'Narratore', text: 'La Montagna Sacra — Dove l\'Induismo incontra il Buddismo, dove Shiva medita.' },
    { speaker: 'Narratore', text: 'Deva Kali danza qui la sua danza di distruzione e rinascita.' },
    { speaker: 'Sadhu', text: 'Il Monte Meru è il centro dell\'universo. Qui ogni tradizione ha la sua montagna sacra.' },
    { speaker: 'Sadhu', text: 'Il Sinai, il Hira, il Kailash... le montagne sono dove il cielo tocca la terra.' },
    { speaker: 'Pellegrino', text: 'Le Upanishad dicono: "Tat tvam asi" — Tu sei Quello. Tutto è Brahman.' },
  ],
  abyss: [
    { speaker: 'Narratore', text: 'L\'Abisso — Dove Nietzsche guardò, e dove tutti i demoni dimorano.' },
    { speaker: 'Narratore', text: 'Qui i kana più potenti e oscuri vagano. Come i jinn nell\'Islam, o gli asura nell\'Induismo.' },
    { speaker: 'Ombra', text: 'Quando guardi nell\'abisso, l\'abisso guarda dentro di te. — Nietzsche' },
    { speaker: 'Ombra', text: 'Ma forse l\'abisso è solo uno specchio. Come il lago del Narciso, o lo specchio di Amaterasu.' },
    { speaker: 'Ombra', text: 'Dante scese attraverso tutti i cerchi dell\'Inferno. Ma risalì per riveder le stelle.' },
  ],
  final: [
    { speaker: 'Narratore', text: 'Il Santuario Finale — Dove tutti i kana convergono, dove tutte le verità si incontrano.' },
    { speaker: 'Narratore', text: 'Qui si decide il destino dei Kana. Come l\'Armageddon, il Ragnarök, la fine del Kali Yuga.' },
    { speaker: 'Narratore', text: 'Ogni tradizione ha la sua escatologia. Ogni fede attende la fine e il nuovo inizio.' },
    { speaker: 'Narratore', text: 'Ma forse la fine è solo un altro inizio. Come il Fūrin, il serpente che si morde la coda.' },
  ],
};

export const victoryDialogues: Record<string, DialogueLine[]> = {
  cristoforo: [
    { speaker: 'Fra Cristoforo', text: 'Impossibile... la mia fede era incrollabile...' },
    { speaker: 'Fra Cristoforo', text: 'Forse... forse Lutero aveva ragione. Forse la fede è personale, non imposta.' },
    { speaker: 'Fra Cristoforo', text: 'Mi ritirerò in monastero a meditare. Come Sant\'Agostino dopo la sua conversione.' },
    { speaker: 'Fra Cristoforo', text: 'Ricorda: "Ama e fa\' ciò che vuoi" — se il tuo amore è vero, non puoi sbagliare.' },
  ],
  bodhi: [
    { speaker: 'Monaco Bodhi', text: '...Ho perso. E nel perdere, ho compreso qualcosa.' },
    { speaker: 'Monaco Bodhi', text: 'La mia visione del vuoto era incompleta. Come dice il Lankavatara Sutra...' },
    { speaker: 'Monaco Bodhi', text: 'Il vuoto non è annientamento. È la consapevolezza che tutto è connesso.' },
    { speaker: 'Monaco Bodhi', text: 'Tornerò a meditare. Forse in mille anni comprenderò davvero il cuore-sutra.' },
  ],
  rashid: [
    { speaker: 'Al-Rashid', text: 'SubhanAllah... hai dimostrato che la mia interpretazione era troppo rigida.' },
    { speaker: 'Al-Rashid', text: 'Il Corano stesso dice: "Allah non cambia un popolo finché esso non cambia se stesso" (13:11).' },
    { speaker: 'Al-Rashid', text: 'Forse la vera Sharia è nel cuore, non nella coercizione.' },
    { speaker: 'Al-Rashid', text: 'Come disse Al-Ghazali: la verità si trova nell\'equilibrio tra ragione e rivelazione.' },
  ],
  kali: [
    { speaker: 'Deva Kali', text: 'AHAHAHA! Hai vinto! Ma la danza continua!' },
    { speaker: 'Deva Kali', text: 'Shiva mi ha insegnato che anche la distruzione ha un limite.' },
    { speaker: 'Deva Kali', text: 'Forse il mio Tandava era fuori tempo. Il ritmo del cosmo è diverso dal mio.' },
    { speaker: 'Deva Kali', text: 'Tornerò a danzare... ma forse con più grazia, meno furia. Namaste, guerriero!' },
  ],
  lao: [
    { speaker: 'Saggio Lao', text: '...' },
    { speaker: 'Saggio Lao', text: 'Hai vinto senza vincere. Io ho perso senza perdere.' },
    { speaker: 'Saggio Lao', text: 'Il Tao Te Ching cap. 22: "Cedendo, si ottiene interamente".' },
    { speaker: 'Saggio Lao', text: 'Forse il wu wei non è smettere di agire, ma agire senza attaccamento al risultato.' },
    { speaker: 'Saggio Lao', text: 'Andrò a meditare su una montagna. O forse no. Chi può dirlo? *sorride*' },
  ],
  rabbi: [
    { speaker: 'Rabbi Ezra', text: 'Baruch Hashem! Hai dimostrato che la saggezza non teme la condivisione.' },
    { speaker: 'Rabbi Ezra', text: 'Il Midrash dice: "La Torah è un albero di vita per coloro che si aggrappano a lei".' },
    { speaker: 'Rabbi Ezra', text: 'Ma "lei" non è possesso — è relazione. Come il patto tra Dio e Israele.' },
    { speaker: 'Rabbi Ezra', text: 'Hai guadagnato il mio rispetto. Che la Shekhinah ti accompagni.' },
  ],
};

export const puzzleIntros: Record<string, DialogueLine[]> = {
  puzzle1: [
    { speaker: 'Guardiano', text: 'Per passare, devi dimostrare la tua saggezza con il codice.' },
    { speaker: 'Guardiano', text: 'Come i monaci抄经 copiavano i sutra, tu devi scrivere il codice che ordina i kana.' },
    { speaker: 'Guardiano', text: 'Scrivi una funzione che ordini i kana per livello crescente.' },
  ],
  puzzle2: [
    { speaker: 'Guardiano', text: 'Il Corano parla di ordinamento e misura. "Ogni cosa presso di Lui è in misura" (13:8).' },
    { speaker: 'Guardiano', text: 'Scrivi una funzione che conti le vocali in una stringa di kana.' },
  ],
  puzzle3: [
    { speaker: 'Guardiano', text: 'Il Buddismo insegna la catena dell\'origine dipendente. Ogni cosa dipende da un\'altra.' },
    { speaker: 'Guardiano', text: 'Scrivi una funzione ricorsiva che calcoli il karma di un kana (somma delle sue statistiche).' },
  ],
  puzzle4: [
    { speaker: 'Guardiano', text: 'Nella Kabbalah, le lettere hanno valori numerici — la Ghematria.' },
    { speaker: 'Guardiano', text: 'Scrivi una funzione che converta un kana nel suo valore numerico (posizione nell\'alfabeto).' },
  ],
  puzzle5: [
    { speaker: 'Guardiano', text: 'Il Tao si muove in cicli. Come lo Yin e Yang, ogni fine è un inizio.' },
    { speaker: 'Guardiano', text: 'Scrivi una funzione che trovi il kana più forte in un array di kana.' },
  ],
};
