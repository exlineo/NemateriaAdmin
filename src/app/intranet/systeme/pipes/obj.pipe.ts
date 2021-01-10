import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obj'
})
export class ObjPipe implements PipeTransform {

  transform(value: unknown, f?: any): unknown {
      if (!value) return '';
      if (!f) return value;

      console.log(value, f, typeof f);
      
      if (typeof(f) == 'object') {
        for(let i in f){
          if(typeof f[i] != 'object') return f[i];
        }
      }
  }
}
