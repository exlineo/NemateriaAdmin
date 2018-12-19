import { NoticeModel } from "./notice.modele";

export interface CollectionModel {
    _id: number;
    type: string;
    nom: string;
    description: string;
    notices: Array<NoticeModel>;
    created: Number;
    updated: Number;
}