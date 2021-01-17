import { NemaSerieModel } from "./documents-model";
import { NoticeModel } from "./notice.modele";

export interface CollectionModel {
    _id?: any;
    titre: string;
    alias: string;
    description: string;
    type: string;
    createur: string;
    fonds?:string;
    langue?: string;
    date?:string;
    groupe?: Array<string>;
    notices?:Array<string>;
    series?:Array<NemaSerieModel>;
    selected?:boolean;
}

export class Collection implements CollectionModel {
    titre = '';
    alias = '';
    description = '';
    type = '';
    createur = '';
    fonds = '';
    langue = '';
    date = '';
    groupe = [];
    notices = [];
    series = [];
    selected = false;
}