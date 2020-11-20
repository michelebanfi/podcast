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
    stando nelle braccia delle madri e sentendosi sicuri."
}]

function _open(title) {
    switch (title) {
        case 'primo':
            document.getElementById("commento").innerHTML = array[0].commento;
            document.getElementById("salmo").innerHTML = array[0].salmo;
            document.getElementById('mp3').src = array[0].mp3;
            document.getElementById('title').innerHTML = array[0].title;
            document.getElementById('description').innerHTML = array[0].description;
            document.getElementById('player').style.visibility = 'visible';
            document.getElementById('player').scrollIntoView();
            break;
        case 'secondo':
            console.log(2)
            break;
    }
}