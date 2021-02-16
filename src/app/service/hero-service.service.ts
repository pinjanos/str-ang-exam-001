import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  private list: Hero[] = [
    {
      id: 1,
      name: 'Fityethányó',
      superPower: 'hányja a fityet',
      address: 'Sutyó falva'
    },
    {
      id: 2,
      name: 'Rütyütyü',
      superPower: 'rütyögg',
      address: 'Bújtat-lak'
    },
    {
      id: 3,
      name: 'Hejehuja',
      superPower: 'haj',
      address: 'Hajmási'
    },
    {
      id: 4,
      name: 'Megverő',
      superPower: 'erősen gyenge',
      address: 'Fújta-tó'
    },
    {
      id: 5,
      name: 'Nemigen',
      superPower: 'Igennem',
      address: 'Semmi, Valami u. 0.'
    },
  ]

  constructor() { }
}
