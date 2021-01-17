import { NemaSerieModel } from "./documents-model";
import { NoticeModel } from "./notice.modele";

export interface CollectionModel {
    _id: string;
    titre: string;
    alias: string;
    description: string;
    type: string;
    createur: string;
    fonds?:string;
    langue?: string;
    groupe?: Array<string>;
    notices?:Array<string>;
    series?:Array<NemaSerieModel>;
    selected?:boolean;
}

export class Collection implements CollectionModel {
    _id: string;
    titre: string;
    alias: string;
    description: string;
    type: string;
    createur: string;
    fonds?:string;
    langue?: string;
    groupe?: Array<string>;
    notices?:Array<string>;
    series?:Array<NemaSerieModel>;
    selected?:boolean;
}