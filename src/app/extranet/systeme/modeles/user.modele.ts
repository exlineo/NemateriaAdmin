export interface UserModel {
    _id?:string;
    nom?: string;
    compte:string;
    mdp: string;
    description?:string;
    email: string;
    statut:number;
} 