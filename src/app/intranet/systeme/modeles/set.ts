export interface SetModel {
    _id?:string | number;
    titre:string;
    alias:string;
    fonds:string;
    description?:string;
    date?:string | number;
    createur?:string;
    gestionnaire?:string;
    documents:Array<any>
}
export class Set implements SetModel {
    titre:string;
    alias:string;
    fonds:string;
    description:string;
    date:string;
    createur:string;
    gestionnaire:string;
    documents:[]
}