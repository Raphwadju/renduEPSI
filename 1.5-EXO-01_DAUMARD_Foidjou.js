const calendrierMatchs = [
  {
    id: 'LFL_KC_SLY',
    jeu: 'League of Legends',
    competition: 'LFL',
    equipeA: 'Karmine Corp',
    equipeB: 'Solary',
    probabiliteA: 0.65, // 65% de chance pour KC
    statut: 'À venir'
  },
  {
    id: 'VCT_VIT_M8',
    jeu: 'Valorant',
    competition: 'VCT EMEA',
    equipeA: 'Team Vitality',
    equipeB: 'Mandatory',
    probabiliteA: 0.55, // 55% de chance pour Vitality
    statut: 'À venir'
  },
  {
    id: 'LFL_GO_BDS',
    jeu: 'League of Legends',
    competition: 'LFL',
    equipeA: 'Gentle Mates',
    equipeB: 'BDS Academy',
    probabiliteA: 0.48, // 48% de chance pour M8, donc BDS est favori
    statut: 'À venir'
  },
  {
    id: 'LFL_KC_M8',
    jeu: 'Valorant',
    competition: 'VCT EMEA',
    equipeA: 'Karmine Corp',
    equipeB: 'Mandatory',
    probabiliteA: 0.52,
    statut: 'À venir'
  }
];

/**
 * Classe représentant un match
 */
class Match {
    constructor(id, jeu, competition, equipeA, equipeB, probabiliteA, statut) {
        this.id = id;
        this.jeu = jeu;
        this.competition = competition;
        this.equipeA = equipeA;
        this.equipeB = equipeB;
        this.probabiliteA = probabiliteA;
        this.statut = statut;
    }

    /**
     * Retourne le nom de l'équipe ayant la plus haute probabilité de victoire
     * @returns {string} Nom de l'équipe favorite
     */
    getfavori(){
        if (this.probabiliteA > 0.5) {
            return this.equipeA;
        } else {
            return this.equipeB;
        }
    }
}

/**
 * Classe représentant la plateforme de gestion des matchs
 */
class Platforme {
    constructor(nom) {
        this.nom = nom;
        this.match = [] ;

    }

    /**
    * Afficher le calendrier des matchs
    */
    afficherCalendrier() {
        for (const donnee of calendrierMatchs) {
            console.log(`[${donnee.id}] | Équipe A: ${donnee.equipeA}, vs , Équipe B: ${donnee.equipeB},  Jeu: ${donnee.jeu}`);
        }
    }

    /**
     * Charger les matchs depuis un tableau de données
     * @param {*} calendrierMatchs Tableau d'objets représentant les données des matchs
     */
    chargerMatchs(matchsACcharger) {
        for (const donnee of matchsACcharger) {
            const matchCharg = new Match(
                donnee.id,
                donnee.jeu,
                donnee.competition,
                donnee.equipeA,
                donnee.equipeB,
                donnee.probabiliteA,
                donnee.statut
            );
            this.match.push(matchCharg);
        }
    }

    /**
     * Obtenir les matchs pour un jeu spécifique
     * @param {*} jeu Le nom du jeu ('League of Legends', 'Valorant' etc...)
     * @returns Tableau de matchs pour le jeu spécifié
     */
    getMatchsByJeu(jeu) {
        return this.match.filter(match => match.jeu === jeu);
    }

    /**
     * Obtenir les matchs considérés comme "serré" (probabilité entre 45% et 55%)
     * @returns Tableau de matchs avec une probabilité entre 45% et 55%
     */
    getMatchsRisques() {
        return this.match.filter(match => match.probabiliteA >= 0.45 && match.probabiliteA <= 0.55);
    }

    /**
     * Cette méthode doit retrouver et retourner l'instance du match correspondant à l'ID fourni.
     * @param {*} id ID du match
     * @returns Le match correspondant à l'ID
     */
    getMatchById(id) {
        return this.match.find(match => match.id === id);
    } 
}

const esportVision = new Platforme('Esport Vision');

esportVision.chargerMatchs(calendrierMatchs);

esportVision.afficherCalendrier();

// Match par ID
console.log('----------------- Voici le match avec l\'ID LFL_KC_SLY ---------------------');
console.log(esportVision.getMatchById('LFL_KC_SLY'));

// Match serré
console.log('----------------- Voici les matchs serrés ---------------------');
console.log(esportVision.getMatchsRisques());


// Match par jeu (League of Legends)
console.log('----------------- Voici les matchs de League of Legends ---------------------');
console.log(esportVision.getMatchsByJeu('League of Legends'));




