export interface MediaModel {
    _id: number;
    type: string;
    nom: string;
    description: string;
    dossier: string;
    fichier: string;
    created?: Number;
    updated?: Number;
}