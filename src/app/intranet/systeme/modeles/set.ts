import { DocumentModel } from "./documents-model";
export interface SetModel {
    _id?:string | number;
    titre:string;
    alias:string;
    fonds:string;
    origine:{dir:string,url:string};
    description?:string;
    date?:string | number;
    createur?:string;
    gestionnaire?:string;
    documents:Array<DocumentModel>
}
export class Set implements SetModel {
    titre:string;
    alias:string;
    fonds:string='inconnu';
    origine:{dir:'',url:''};
    description:string;
    date:string;
    createur:string;
    gestionnaire:string;
    documents:[]
}