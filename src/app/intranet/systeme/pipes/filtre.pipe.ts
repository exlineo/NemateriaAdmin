import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filtre'
})
export class FiltrePipe implements PipeTransform {
	public transform(values: any[], filter: any): any[] {
		if (!values || !values.length) return [];
		if (!filter) return values;

		if (typeof(filter)=='string') {
			return values.filter(v => {
				// Filtre sur le titre
				if (v.titre) {
					return v.titre.indexOf(filter) >= 0;
				}
				// Filtre sur la description
				if (v.description) {
					return v.description.indexOf(filter) >= 0;
				}
			});
		}
		if (typeof (filter) == 'number') {
			return values.filter(v => {
				// Filtre sur _id
				if (v._id) {
					return values.find(not => not._id == filter);
				}
			});
		}
	}
}