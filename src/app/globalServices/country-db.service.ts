import { Injectable } from '@angular/core';

export interface countryInterface {
  name: string;
  iso: string;
  cities: string[];
}

export interface dataBaseInterface {
  germany: countryInterface;
  switzerland: countryInterface;
  france: countryInterface;
  'united kingdom': countryInterface;
  ireland: countryInterface;
  netherlands: countryInterface;
  norway: countryInterface;
  sweden: countryInterface;
}

export type dataBaseInterfaceArr = countryInterface[];


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
    france: {
      name: 'france',
      iso: 'fr',
      cities: [
        'Paris',
        'Marseille',
        'Lyon',
        'Toulouse',
        'Nice',
        'Nantes',
        'Montpellier',
        'Strasbourg',
        'Bordeaux',
        'Lille',
        'Rennes',
        'Reims',
        'Saint-Étienne',
        'Toulon',
        'Le Havre',
        'Grenoble',
        'Dijon',
        'Angers',
        'Nîmes',
        'Saint-Denis',
        'Villeurbanne'
        ]
    },
    'united kingdom'	: {
      name: 'united kingdom',
      iso: 'gb',
      cities: [
        'London',
        'Birmingham',
        'Manchester',
        'Yorkshire',
        'North East',
        'Glasgow',
        'Liverpool',
        'Cardiff',
        'Sheffield',
        'Edinburgh',
        ]
    },
    ireland	: {
      name: 'ireland',
      iso: 'ie',
      cities: [
        'Dublin',
        'Cork',
        'Limerick',
        'Galway',
        'Waterford',
        'Drogheda',
        'Swords',
        'Dundalk',
        'Bray',
        'Navan',
        'Kilkenny',
        'Ennis',
        'Carlow',
        'Tralee',
        'Leonding',
        'Newbridge',
        'Port Laoise',
        'Balbriggan',
        'Naas',
        'Athlone',
        'Mullingar'
        ]
    },
    netherlands	: {
      name: 'netherlands',
      iso: 'nl',
      cities: [
        'Amsterdam',
        'Rotterdam',
        'The Hague',
        'Utrecht',
        'Eindhoven',
        'Groningen',
        'Breda',
        'Tilburg	',
        'Nijmegen',
        'Almere',
        ]
    },
    norway: {
      name: 'norway',
      iso: 'no',
      cities: [
        'Oslo',
        'Bergen',
        'Trondheim',
        'Stavanger',
        'Kristiansand',
        'Fredrikstad',
        'Sandnes',
        'Tromso',
        ]
    },
    sweden: {
      name: 'sweden',
      iso: 'se',
      cities: [
        'Stockholm',
        'Gothenburg',
        'Malmö',
        'Uppsala',
        'Västerås',
        'Örebro',
        'Linköping',
        'Helsingborg',
        'Jönköping',
        'Norrköping',
        'Lund',
        'Umeå',
        'Gävle',
        'Borås',
        'Södertälje',
        'Eskilstuna',
        'Halmstad',
        'Växjö',
        'Karlstad',
        ]
    },
  };
  constructor() { }

  get dataBaseData(): dataBaseInterface{
    return this.dataBase;
  }
  get dataBaseDataArr(): dataBaseInterfaceArr{
    const arr: dataBaseInterfaceArr = [];
    for(let country in this.dataBase){
      arr.push(this.dataBase[country])
    }
    console.log(arr);
    return arr;
  }
}
