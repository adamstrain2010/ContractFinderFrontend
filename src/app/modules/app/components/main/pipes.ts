import { Pipe, PipeTransform } from '@angular/core';
import { ReedResponse } from './../../../data/models/ReedResponse.model';

@Pipe({
  name: 'seen',
  pure: false
})
export class SeenPipe implements PipeTransform {

  transform(allContracts: ReedResponse[], args:any[]): ReedResponse[] {
    let seenVal = args[0];
    return allContracts.filter(contract  => contract.seen == seenVal);
  }

}
