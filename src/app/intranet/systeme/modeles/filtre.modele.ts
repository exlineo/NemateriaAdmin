export interface FiltreModel {
    _id?: string;
    titre: string;
    alias: string;
    description: string;
    createur?: string;
    date?: string;
    donnees:Array<string>;
}

export class Filtre implements FiltreModel {
    _id?: string;
    titre: string;
    alias: string;
    description: string;
    createur?: string;
    date?: string;
    donnees:Array<string>;
}