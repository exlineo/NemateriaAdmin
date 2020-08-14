import { NoticeModel } from "./notice.modele";

export interface CollectionModel {
    _id: string;
    titre: string;
    alias: string;
    description: string;
    type: string;
    createur: string;
    fond?:string;
    langue?: string;
    groupe?: Array<string>;
    notices?:Array<string>;
    series?:Array<string>;
    selected?:boolean;
}

export class Collection implements CollectionModel {
    _id: string;
    titre: string;
    alias: string;
    description: string;
    type: string;
    createur: string;
    fond?:string;
    langue?: string;
    groupe?: Array<string>;
    notices?:Array<string>;
    series?:Array<string>;
    selected?:boolean;
}