import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {
  transform(val:string):string {
    var a = val.split("/");
    return a[a.length - 1];

  }
}