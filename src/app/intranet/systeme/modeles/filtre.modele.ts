export interface FiltreModel {
    _id?: string | number;
    titre: string;
    alias: string;
    description: string;
    createur?: string;
    date?: string;
    donnees?:Array<string>;
}

export class Filtre implements FiltreModel {
    titre = "";
    alias = "";
    description = "";
    createur = "";
    date = "";
    donnees = [];
}