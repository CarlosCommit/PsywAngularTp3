import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda'
})
export class MonedaPipe implements PipeTransform {

  constructor()
  {
    
  }
  transform(value: number | string | null | undefined, currencyCode: string = 'ARS', digitsInfo: string = '1.2-2'): string | null {
    const parsedValue = parseFloat(value as string);

    if (isNaN(parsedValue)) {
      return null;
    }

    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(parsedValue);
  }

}
