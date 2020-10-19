import { Component, OnInit } from '@angular/core';
import { CountryDbService, countryInterface, dataBaseInterface, dataBaseInterfaceArr } from '../globalServices/country-db.service';
import { GlobalDbService } from '../globalServices/global-db.service';

@Component({
  selector: 'app-settings-manager',
  templateUrl: './settings-manager.component.html',
  styleUrls: ['./settings-manager.component.scss']
})
export class SettingsManagerComponent implements OnInit {
  countryDataArr: dataBaseInterfaceArr;
  countryData: dataBaseInterface;
  activeCountryData: { locationCity: string , locationCountry: string , locationCountryCode: string };

  slectedCountry: string | null;

  constructor(private globalDb: GlobalDbService, private countryDb: CountryDbService) { }

  ngOnInit(): void {
    this.countryData = this.countryDb.dataBaseData;
    this.countryDataArr = this.countryDb.dataBaseDataArr;

    this.activeCountryData = this.globalDb.locationSpData;
    
    this.slectedCountry = this.globalDb.locationSpData.locationCountry;
  }
  selectCountry(el: HTMLSelectElement){
    this.slectedCountry = el.value;
    this.globalDb.locarionCountrySeter = el.value;
  }

  selectCity(el: HTMLSelectElement){
    this.globalDb.locarionDataSeter(el.value, 'locationCity');
  }
}
