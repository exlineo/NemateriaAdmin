import { NoticeModel } from "./notice.modele";

export interface CollectionModel {
    readonly _id: string;
    readonly titre: string;
    readonly alias: string;
    readonly description: string;
    readonly type: string;
    readonly createur: string;
    readonly fond:string;
    readonly langue: string;
    readonly groupe?: Array<string>;
    readonly notices?:Array<NoticeModel>;
    readonly series?:Array<string>;
}