export interface NoticeModel {
    _id: number;
    type: string;
    nom: string;
    description: string;
    dossier: string;
    fichier: string;
    created: Number;
    updated: Number;
}
/**
 * @type Interface
 * Modèle Informateur intégré dans les métadonnées des notices
 */
export interface InformateurModel{
    nom:string;
    pseudonyme?:string;
    dateNaissance?:Date;
    competence?:string;
}
/**
 * @type Interface
 * Modèle des localisations des notices
 */
export interface LocalisationModel{
    pays:string;
    codepostal?:string;
    departement?:string;
    region?:string;
    commune?:string;
    lieudit?:string;
    gpsll?:Array<number>;
}
/**
 * @type Interface
 * Modèle des contenus des notices
 */
export interface RelationsModel{
    langues?:Array<string>;
    lieu?:string;
    temps?:string;
    type?:string;
    notes?:string;
}
/**
 * @type Interface
 * Modèle de description des notices
 */
export interface DocumentModel{
    idunique:string;
    reference:string;
    dateCreation:Date;
    nature:string;
    caracteristique?:string;
    formatMaster?:string;
    dateNumerisation:Date;
    accessibilite:Array<number>;
}
/**
 * @type Interface
 * Modèle définition des droits des notices
 */
export interface DroitsModel{
    participants:Array<string>;
    proprietaireOriginaux?:string;
    conservateurOriginaux:Date;
    nature:string;
}
/**
 * @type Interface
 * Modèle de qui gère la collection physique des notices
 */
export interface GestionCollectionModel{
    numerise:Array<string>;
    proprietaireOriginaux?:string;
    conservateurOriginaux:Date;
    conservateurFichiers?:string;
    detenteurDroits?:string;
    gestionnaireDroits?:string;
}
/**
 * @type Interface
 * Modèle de gestion des séquences des notices
 */
export interface SequencesModel{
    numero:Array<string>;
    debut:number;
    duree:number;
    resume?:string;
    motsCles?:string;
    evenements?:Array<number>;
}