export interface FiltreModel {
    _id?: string | number;
    titre: string;
    alias: string;
    prefix?:Array<string>;
    description: string;
    createur?: string;
    date?: string;
    metadonnees?:Array<string>;
}
export class Filtre implements FiltreModel {
    titre = "";
    alias = "";
    prefix = ['oai_dc', 'oai_nema'];
    description = "";
    createur = "";
    date = "";
    metadonnees = [];
}