import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filternumber',
  standalone: true
})
export class FilternumberPipe implements PipeTransform {

  transform(items: any[], searchNumber: number): any {
    if (!items) return [];
    if (!searchNumber) return items;

    let searchNumberStr: string = searchNumber.toString()
    return items.filter(item =>
      item.id.toString().toLowerCase().includes(searchNumberStr) || item.userId.toString().toLowerCase().includes(searchNumberStr) 
    );
  }

}
