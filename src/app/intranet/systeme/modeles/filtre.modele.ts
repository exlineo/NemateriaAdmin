export interface FiltreModel {
    readonly _id?: string;
    readonly titre: string;
    readonly alias: string;
    readonly description: string;
    readonly createur?: string;
    readonly donnees:Array<string>;
}

export class Filtre implements FiltreModel {
    _id?: string;
    titre: string;
    alias: string;
    description: string;
    createur?: string;
    donnees:Array<string>;
}