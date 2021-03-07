import { Pipe, PipeTransform } from '@angular/core';
import { NoticeModel } from '../modeles/notice.modele';
import { FiltrePipeModel } from '../modeles/pipes.modele';
/**
 * Filtre sur les notices en utilisant un objet de filtre
 * La valeur 'pure' permet de traiter les changements de l'objet filtre en temps réel
 */
@Pipe({
	name: 'filtreNotices',
	pure: false
})
export class FiltreNoticesPipe implements PipeTransform {
	public transform(values: Array<NoticeModel>, filtre:FiltrePipeModel): any[] {
		if (!values || !values.length) return [];
		if (!filtre) return values;

		// return values.filter(n => {
		// 	if(filtre.libre) n.metadonnees.dublincore.title.indexOf(filtre.libre) != -1;
			
		// })

		if (filtre.libre.length > 2) {
			return values.filter(
				v => {
					let tmp = JSON.stringify(v).toLowerCase();
					if(tmp.indexOf(filtre.libre) !== -1){
						return v;
					};
			});
		}else if(filtre.type){
			return values.filter(
				v => {
					if(v.metadonnees.dublincore.format.indexOf(filtre.type) !== -1){
						return v;
					};
			});
		}else if(filtre.dateDebut){
			return values.filter(
				v => {
					let debut = Date.parse(filtre.dateDebut);
					if(v.metadonnees.dublincore.date >= debut){
						return v;
					};
			});
		}else if(filtre.dateFin){
			return values.filter(
				v => {
					let fin = Date.parse(filtre.dateFin); 
					if(v.metadonnees.dublincore.date <= fin){
						return v;
					};
			});
		}
		else{
			return values;
		}
	}
}