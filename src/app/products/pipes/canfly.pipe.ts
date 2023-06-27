import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canfly'
})
export class CanflyPipe implements PipeTransform {

  transform(vuela:boolean): 'Vuela'|'No Vuela' {
    return (vuela)?'Vuela':'No Vuela';
  }

}
