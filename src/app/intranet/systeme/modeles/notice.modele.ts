export interface NoticeModel {
    _id: number;
    idUnique: string;
    titre: string;
    description: string;
    motsCles: Array<string>;
    uri:string;
    referenceOriginal: string;
    fichier:FichierModele;
    auteurs?: Array<PersonneModele>;
    informateur?: InformateurModele;
    auteurDescription?:PersonneModele;
    localisation?: LocalisationModele;
    contenu?: ContenuModele;
    relations?: RelationsModele;
    originaux?: OriginauxModele;
    droits?: DroitsModele;
    gestionCollection?: GestionCollectionModele;
    sequences?: SequencesModele;
    selected?:boolean;
}

export interface FichierModele{
    nom:string;
    type:string;
    url:string;
    taille:string | number;
    largeur:number | string;
    hauteur:number | string;
}
/**
 * @type Interface
 * Modèle Informateur intégré dans les métadonnées des notices
 */
export interface PersonneModele {
    _id?: number;
    nom: string;
    prenom?:string;
    role?: string;
    genre?:"";
    raisonSociale?: string;
}
export interface InformateurModele {
    _id?: number;
    nom: string;
    prenom?:string;
    pseudo?: string;
    anneeNaissance?:string;
    caracteristique?:string;
} 
/**
 * @type Interface
 * Modèle des localisations des notices
 */
export interface LocalisationModele{
    pays:string;
    codePostal?:string;
    departement?:string;
    commune?:string;
    lieudit?:string;
    gps?:GPSModele;
}

export interface GPSModele{
    lattitude:number;
    longitude:number
}

export interface ContenuModele{
    langue?:string;
    lieu?:string;
    temps?:string;
    type?:string;
    notes?:string;
}

export interface RelationsModele {
    idCollection?:number;
    idSerie?:number;
    ordre?:number;
    contient?:"",
    requiert?:Array<number>;
    liensInternes?:Array<string>;
    liensExternes?:Array<string>;

}

export interface OriginauxModele {
    dateCreation?: string,
    dateNumerisation?: string,
    nature?: string,
    caracteristique?: string,
    formatMaster?: string,
    accessibilite?: 0
}
/**
 * @type Interface
 * Modèle définition des droits des notices
 */
export interface DroitsModele {
    editeur: string;
    licence: string;
    copyright: string;
    urlLicence: string;
    participants: Array<PersonneModele>;
    producteur: Array<PersonneModele>;
}
/**
 * @type Interface
 * Modèle de qui gère la collection physique des notices
 */
export interface GestionCollectionModele {
    numerise?: Array<PersonneModele>;
    proprietaireOriginaux?: string;
    conservateurOriginaux?: string;
    conservateurFichiers?: string;
    detenteurDroits?: string;
    gestionnaireDroits?: string;
}
/**
 * @type Interface
 * Modèle de gestion des séquences des notices
 */
export interface SequencesModele {
    numero: number;
    debut: number;
    duree: number;
    resume?: string;
    motsCles?: string;
    evenements?: Array<number>;
}