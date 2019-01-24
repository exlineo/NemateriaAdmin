import { NoticeModel } from "./notice.modele";

export interface CollectionModel {
    _id: number;
    type: string;
    nom: string;
    description: string;
    notices: Array<NoticeModel>;
    series?:Array<string>;
    created: string;
    updated: string;
}