import { Pipe, PipeTransform } from '@angular/core';
/**
 * Filtre sur les notices en utilisant un objet de filtre
 * La valeur 'pure' permet de traiter les changements de l'objet filtre en temps réel
 */
@Pipe({
	name: 'filtreNotices',
	pure: false
})
export class FiltreNoticesPipe implements PipeTransform {
	public transform(values: any[], filtre: any): any[] {
		if (!values || !values.length) return [];
		if (!filtre) return values;

		if (filtre['libre'].length > 2) {
			return values.filter(
				v => {
					let tmp = JSON.stringify(v).toLowerCase();
					if(tmp.indexOf(filtre['libre']) !== -1){
						return v;
					};
			});
		}else if(filtre['type'].length > 2){
			return values.filter(
				v => {
					let tmp = JSON.stringify(v).toLowerCase();
					if(v.fichier.type.indexOf(filtre['type']) !== -1){
						return v;
					};
			});
		}
		else{
			return values;
		}
	}
}