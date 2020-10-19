import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ICities } from 'src/domain/icities';
import { SelectItem } from 'primeng/api';
import { ComboItems } from 'src/domain/comboItems';
import { ComboItemValue } from 'src/domain/comboitemvalue';
import { IArea } from 'src/domain/iarea';
import { IPropertyType } from 'src/domain/iproperty-type';
import { IProperties } from 'src/domain/iproperties';

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
  selectedCityId: SelectItem;
  selectedProTypeId: SelectItem;
  selectedAreaId: SelectItem;
  display = false;
  displayLoginPopup = false;
  constructor(private appService: AppService) { }
  ngOnInit(): void {
    this.getCityDorpdown();
    this.getPropertyTypeDorpdown();
    this.onCityChange(-1);
  }

  onSearchClick(): void {
    this.isSearched = true;
    this.appService.getProperties(this.selectedAreaId, this.selectedProTypeId).subscribe(properties => {
      this.properties = properties;
    });
  }

  onBookNowClick(rowData): void {
    this.display = true;
    if (localStorage.getItem('isLoggedIn') === 'true') {
      rowData.occupiedBy = parseInt(localStorage.getItem('userId'), 10);
      this.appService.bookProperty(rowData).subscribe(property => {
        this.display = false;
        this.onSearchClick();
      });
    } else {
      this.display = false;
      this.displayLoginPopup = true;
    }
  }

  onLoginPopupOKClick() {
    this.displayLoginPopup = false;
  }

  onCityChange(id): void {
    this.selectedCityId = id;
    this.getAreaDorpdown();
  }
  onAreaChange(id): void {
    this.selectedAreaId = id;
  }
  onProTypeChange(id): void {
    this.selectedProTypeId = id;
  }
  getCityDorpdown(): void {
    this.appService.getCities().subscribe(city => {
      this.cities = this.getCitiesComboItems(city);
    });
  }

  getAreaDorpdown(): void {
    this.appService.getArea(this.selectedCityId).subscribe(area => {
      this.area = this.getAreaComboItems(area);
    });
  }

  getPropertyTypeDorpdown(): void {
    this.appService.getPropertyType().subscribe(proType => {
      this.propertyType = this.getPropertyTypeComboItems(proType);
    });
  }

  private addFirstItem(): Array<SelectItem> {
    const items: Array<SelectItem> = [];
    const subItem = {
      id: -1,
      code: '',
      name: null
    };

    const item: SelectItem = { label: '--- select ---', value: subItem };
    items.push(item);
    return items;
  }

  getCitiesComboItems(data: ICities[]): Array<SelectItem> {
    const items: Array<SelectItem> = this.addFirstItem();
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
    const items: Array<SelectItem> = this.addFirstItem();
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
    const items: Array<SelectItem> = this.addFirstItem();
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
