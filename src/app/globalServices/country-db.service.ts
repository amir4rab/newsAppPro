import { Injectable } from '@angular/core';

export interface countryInterface {
  name: string;
  iso: string;
  cities: string[];
}

export interface dataBaseInterface {
  germany: countryInterface;
  switzerland: countryInterface;
  austria: countryInterface;
}

@Injectable({
  providedIn: 'root'
})
export class CountryDbService {
  private dataBase = {
    germany: {
      name: 'germany',
      iso: 'de',
      cities: [
        'Berlin',
        'Hamburg',
        'Munich',
        'Cologne',
        'Frankfurt am Main',
        'Stuttgart',
        'Düsseldorf',
        'Dortmund',
        'Essen',
        'Leipzig',
        'Bremen',
        'Dresden',
        'Hanover',
        'Nuremberg',
        'Bochum',
        'Bielefeld',
        'Bonn',
        'Münster',
        'Karlsruhe',
        'Mannheim',
        'Augsburg',
        'Wiesbaden',
        'Gelsenkirchen',
        'Mönchengladbach',
        'Braunschweig',
        'Chemnitz',
        'Kiel',
        'Aachen',
        'Halle',
        'Magdeburg',
        'Freiburg im Breisgau',
        'Krefeld',
        'Lübeck',
        'Oberhausen',
        'Erfurt',
        'Mainz',
        'Rostock',
        'Kassel'
        ]
    },
    switzerland: {
      name: 'switzerland',
      iso: 'ch',
      cities: [
        'Zürich',
        'Geneva',
        'Basel',
        'Lausanne',
        'Bern',
        'Stuttgart',
        'Winterthur',
        'Lucerne',
        'St. Gallen',
        'Lugano',
        'Bienne',
        'Thun',
        'Bellinzona',
        'Köniz',
        'Fribourg',
        'La Chaux-de-Fonds',
        'Schaffhausen',
        'Chur',
        'Vernier',
        'Uster',
        'Sion'
        ]
    },
    austria: {
      name: 'austria',
      iso: 'at',
      cities: [
        'Vienna',
        'Graz',
        'Linz',
        'Salzburg',
        'Innsbruck',
        'Klagenfurt am Wörthersee',
        'Villach',
        'Wels',
        'Sankt Pölten',
        'Dornbirn',
        'Wiener Neustadt',
        'Steyr',
        'Feldkirch',
        'Bregenz',
        'Leonding',
        'Klosterneuburg',
        'Baden bei Wien',
        'Wolfsberg',
        'Leoben',
        'Krems an der Donau',
        'Traun'
        ]
    },
  };
  constructor() { }
  get germanyCities(): string[]{
    return this.dataBase.germany.cities;
  }
  get switzerlandCities(): string[]{
    return this.dataBase.switzerland.cities;
  }
  get austriaCities(): string[]{
    return this.dataBase.austria.cities;
  }
  get dataBaseData(): dataBaseInterface{
    return this.dataBase;
  }
}
