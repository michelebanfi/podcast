//#F9A826

const array = [{
    mp3: 'podcastEp1.mp3',
    title: 'Episodio 1',
    description: 'Salmo 131',

    salmo: 'Signore, non si inorgoglisce il mio cuore \
    e non si leva con superbia il mio sguardo; \
    non vado in cerca di cose grandi, \
    superiori alle mie forze. \
    Io sono tranquillo e sereno \
    come un bimbo svezzato in braccio a sua madre, \
    come un bimbo svezzato è l\'anima mia. \
    Speri Israele nel Signore, ora e sempre.',

    commento: "Per comprendere meglio il Salmo è possibile \
    suddividerlo in due differenti parti: la prima descrive le \
    nostre capacità e la seconda il modo in cui dovremmo viverle. \
    In primis sembra che vengano divise le parti del corpo a seconda di ciò che si vuole esprimere, \
    \"non si inorgoglisce il mio cuore e non si leva con superbia il mio sguardo\”, \
    come se noi fossimo sempre composti da queste parti, ma sta a noi decidere cosa farne e come comportarci. \
    L’espressione:\“Non vado in cerca di cose grandi, superiori alle mie forze. \
    Io sono tranquillo e sereno\”, \
    ci fa percepire che nella vita bisogna certamente puntare in alto, \
    ma ciò non deve essere un’ossessione quasi patologica e convulsa, \
    cercando di non raggiungere obiettivi oltre le proprie capacità. \
    Perciò nulla è troppo grande se fatto con Dio, con colui che ci dà fiducia e di cui ci possiamo pienamente fidare. \
    Non importa quanto salti in alto, salta e basta, sapendo che Dio è con te. \
    Nella seconda parte viene proposto un parallelismo tra l’uomo e \“il bimbo”, il quale viene descritto come \“svezzato\”, \
    termine che deriva dal latino e si riferisce proprio al perdere le cattive abitudini. \
    Perciò l’uomo deve disabituarsi alle cose superiori alle proprie forze, restando umile e cercando la verità in Dio. \
    Il bimbo in grembo alla madre è assimilabile al popolo nelle mani di Dio. \
    Questa è la base della religione perché noi ci affidiamo completamente nelle mani di Dio come fanno ingenuamente i bambini, \
    stando nelle braccia delle madri e sentendosi sicuri.",
    pdf: '131.pdf',
},
{
    mp3: 'podcastEp2.mpeg',
    title: 'Episodio 2',
    description: 'Salmo 129',

    salmo: 'Canto delle ascensioni. \
    Dal profondo a te grido, o Signore; \
    Signore, ascolta la mia voce. \
    Siano i tuoi orecchi attenti \
    alla voce della mia preghiera. \
    Se consideri le colpe, Signore, \
    Signore, chi potrà sussistere? \
    Ma presso di te è il perdono: \
    e avremo il tuo timore. \
    Io spero nel Signore, \
    l\'anima mia spera nella sua parola. \
    L\'anima mia attende il Signore\
    più che le sentinelle l\'aurora.\
    Israele attenda il Signore,\
    perché presso il Signore è la misericordia \
    e grande presso di lui la redenzione. \
    Egli redimerà Israele \
    da tutte le sue colpe. ',

    commento: "Se consideri le colpe, Signore, Signore, chi potrà sussistere? \
    In poche righe si definisce quanto l’amore di dio vada oltre i nostri sbagli; \
    Dio non guarda alle nostre colpe, non guarda a quanto sappiamo perfomare, non ci giudica. \
    Ma presso di te è il perdono e avremo il tuo timore, \
    recita il salmo che con potenza e sincerità ci indica l’unica strada per la salvezza. \
    Il timore che lui genera in noi non è scaturito da paura come fosse un re oppressivo ma dall’amore, \
    da come lui ci guarda e come ci rincuora. Il suo amore e la sua misericordia sono talmente grandi \
    per i nostri cuori che il timore è l’unica emozione che può nascere quando egli ci perdona. Diviene \
    come un senso di gratitudine, di rispetto verso colui che incondizionatamente ci ama e ciò sta alla \
    base della nostra relazione con dio. \
    \
    L'anima mia spera nella sua parola; L'anima mia attende il Signore; \
    più che le sentinelle l'aurora. Queste parole rendono bene l'idea di come siamo disperati quando abbiamo bisogno di lui.\
    Spesso l’orgoglio e i canoni della società ci vogliono tutti incrollabili e sicuri di noi, può capitare però, nelle nostre vite, \
    di avere un sentimento come di sprofondare nella paura, ma per apparire sempre infallibili, \
    rimaniamo in silenzio e solo allora chiediamo aiuto a te che sei una fonte inesauribile di ascolto e \
    ci rendiamo conto che la speranza è importante.\
    Dio soffre con noi, la nostra sofferenza tocca il suo cuore. \
    Questo è il suo modo di aiutarci: stare nel dolore con noi senza mai lasciarci soli.",
    pdf: '129.pdf',
},
]

function _open(title) {
    switch (title) {
        case 'primo':
            document.getElementById("commento").innerHTML = array[0].commento;
            document.getElementById("salmo").innerHTML = array[0].salmo;
            document.getElementById('mp3').src = array[0].mp3;
            document.getElementById('title').innerHTML = array[0].title;
            document.getElementById('description').innerHTML = array[0].description;
            document.getElementById('pdf').href = array[0].pdf;
            document.getElementById('player').style.visibility = 'visible';
            document.getElementById('player').scrollIntoView();
            break;
        case 'secondo':
            document.getElementById("commento").innerHTML = array[1].commento;
            document.getElementById("salmo").innerHTML = array[1].salmo;
            document.getElementById('mp3').src = array[1].mp3;
            document.getElementById('title').innerHTML = array[1].title;
            document.getElementById('description').innerHTML = array[1].description;
            document.getElementById('pdf').href = array[1].pdf;
            document.getElementById('player').style.visibility = 'visible';
            document.getElementById('player').scrollIntoView();
            break;
    }
}