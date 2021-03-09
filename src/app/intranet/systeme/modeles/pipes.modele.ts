export interface FiltrePipeModel {
    libre:string;
    dateDebut:string;
    dateFin:string;
    type:string;
}
export class FiltreNotices implements FiltrePipeModel {
    libre = '';
    dateDebut = '';
    dateFin = '';
    type = '';
}