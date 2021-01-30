export interface FiltreModel {
    _id?: string | number;
    titre: string;
    alias: string;
    prefix?:string;
    description: string;
    createur?: string;
    date?: string;
    metadonnees?:Array<string>;
}

export class Filtre implements FiltreModel {
    titre = "";
    alias = "";
    prefix = "";
    description = "";
    createur = "";
    date = "";
    metadonnees = [];
}