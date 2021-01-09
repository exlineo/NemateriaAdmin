export interface SetModel {
    _id?:string | number;
    titre:string;
    description?:string;
    date?:string | number;
    createur?:string;
    gestionnaire?:string;
    metadonnees:Array<any>
}
export class Set implements SetModel {
    titre:string;
    description:string;
    date:string;
    createur:string;
    gestionnaire:string;
    metadonnees:[]
}