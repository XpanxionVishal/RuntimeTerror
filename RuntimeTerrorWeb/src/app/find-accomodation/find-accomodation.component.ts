import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ICities } from 'src/domain/icities';
import { SelectItem } from 'primeng/api';
import { ComboItems } from 'src/domain/comboItems';
import { ComboItemValue } from 'src/domain/comboitemvalue';
import { HttpHeaders } from '@angular/common/http';
import { IArea } from 'src/domain/iarea';
import { IPropertyType } from 'src/domain/iproperty-type';
import { IProperties } from 'src/domain/iproperties';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-find-accomodation',
  templateUrl: './find-accomodation.component.html',
  styleUrls: ['./find-accomodation.component.css']
})
export class FindAccomodationComponent implements OnInit {
  cities: SelectItem[];
  area: SelectItem[];
  propertyType: SelectItem[];
  properties: IProperties[];
  images: any[];
  imagePath: any;
  val: number;
  isSearched = false;
  selectedCity: SelectItem;
  selectedProType: SelectItem;
  selectedArea: SelectItem;
  constructor(
    private appService: AppService
  ) {
    // this.cities1 = [
    //   { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
    //   { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
    //   { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
    //   { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
    //   { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    // ];
  }

  ngOnInit(): void {
    this.getCityDorpdown();
    // this.getAreaDorpdown();
    this.getPropertyTypeDorpdown();
    this.getProperties();
  }

  onSearchClick(): void {
    this.getProperties();
    this.isSearched = true;
  }
  getProperties(): void {
    this.appService.getProperties(this.selectedArea.id, this.selectedProType.id).subscribe(properties => {
      this.properties = properties;
    });
  }

  onCityChange(item): void {
    console.log(item);
    this.selectedCity = item;
    this.getAreaDorpdown()
  }
  onAreaChange(item): void {
    console.log(item);
    this.selectedArea = item;
  }
  onProTypeChange(item): void {
    console.log(item);
    this.selectedProType = item;
  }
  getCityDorpdown(): void {
    this.appService.getCities().subscribe(city => {
      this.cities = this.getCitiesComboItems(city);
    });
  }

  getAreaDorpdown(): void {
    this.appService.getArea(this.selectedCity.id).subscribe(area => {
      this.area = this.getAreaComboItems(area);
    });
  }

  getPropertyTypeDorpdown(): void {
    this.appService.getPropertyType().subscribe(proType => {
      this.propertyType = this.getPropertyTypeComboItems(proType);
    });
  }
  getCitiesComboItems(data: ICities[]): Array<SelectItem> {
    // const items: Array<SelectItem> = this.addFirstItem();
    const items = [];

    if (data) {
      data.forEach(element => {
        const item = new ComboItems();
        const subItems = new ComboItemValue();

        // item
        item.label = element.cityName;

        // item value
        subItems.id = element.cityId;
        subItems.name = element.cityName;

        item.value = subItems;
        items.push(item);
      });
      return items;
    }
  }

  getAreaComboItems(data: IArea[]): Array<SelectItem> {
    // const items: Array<SelectItem> = this.addFirstItem();
    const items = [];

    if (data) {
      data.forEach(element => {
        const item = new ComboItems();
        const subItems = new ComboItemValue();

        // item
        item.label = element.areaName;

        // item value
        subItems.id = element.cityId;
        subItems.name = element.areaName;

        item.value = subItems;
        items.push(item);
      });
      return items;
    }
  }

  getPropertyTypeComboItems(data: IPropertyType[]): Array<SelectItem> {
    // const items: Array<SelectItem> = this.addFirstItem();
    const items = [];

    if (data) {
      data.forEach(element => {
        const item = new ComboItems();
        const subItems = new ComboItemValue();

        // item
        item.label = element.typeName;

        // item value
        subItems.id = element.typeId;
        subItems.name = element.typeName;

        item.value = subItems;
        items.push(item);
      });
      return items;
    }
  }
}
