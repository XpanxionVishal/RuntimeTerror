import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { IUserListResult } from '../domain/IUserListResult';
import { ComboItemValue } from 'src/domain/comboitemvalue';
import { ComboItems } from 'src/domain/comboItems';
import { IPropertyType } from 'src/domain/iproperty-type';
import { IArea } from 'src/domain/iarea';
import { ICities } from 'src/domain/icities';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IProperties } from 'src/domain/iproperties';

@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.css']
})
export class PostAdComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private appService: AppService,
    private fb: FormBuilder
  ) {

  }

  @ViewChild('fileInput') fileInput;
  postAdForm: FormGroup;
  items: MenuItem[];
  uploadedFiles: any[] = [];
  cities: SelectItem[];
  area: SelectItem[];
  propertyType: SelectItem[];
  fileModel: any = {
    fileContent: ''
  };
  public progress: number;
  public message: string;
  isUserLoggedIn = false;
  responseMessage = '';

  ngOnInit(): void {
    this.getCityDorpdown();
    this.getAreaDorpdown();
    this.getPropertyTypeDorpdown();
    this.initializeForm();
  }

  initializeForm(): void {
    this.postAdForm = this.fb.group({
      ownerName: [],
      contact: [],
      city: [],
      area: [],
      propertyType: [],
      costPerDay: [],
      postedBy: [],
      isOccupied: [],
      address: [],
      picture: []
    });
  }
  getCityDorpdown(): void {
    this.appService.getCities().subscribe(city => {
      this.cities = this.getCitiesComboItems(city);
    });
  }

  getAreaDorpdown(): void {
    this.appService.getArea(1).subscribe(area => {
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
    // const items = [];

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
    // const items = [];

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
    // const items = [];

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

  onTemplateUpload(): void {
    const files = this.fileInput.files;
    this.fileModel.fileContent = files;
    const formData = new FormData();

    for (const file of files) {
      formData.append('file.png', file);
    }

    const headers = new HttpHeaders().append('Content-Disposition', 'multipart/form-data');

    this.http.post('https://localhost:5001/api/Property/SaveProperty',
      formData, { headers }).subscribe(event => {
        console.log(event);
      });
  }

  onPostAdClick(): void {

    const files = this.fileInput.files;
    this.fileModel.fileContent = files;
    const formData = new FormData();

    for (const file of files) {
      formData.append('file.png', file);
    }

    const headers = new HttpHeaders().append('Content-Disposition', 'multipart/form-data');

    const property: any = {
      propertyId: 0,
      propertyType: this.postAdForm.value.propertyType.name,
      propertyTypeId: this.postAdForm.value.propertyType.id,
      area: this.postAdForm.value.area.name,
      areaId: this.postAdForm.value.area.id,
      postedBy: this.postAdForm.value.postedBy,
      postedByUserId: localStorage.getItem('userId'),
      address: this.postAdForm.value.address,
      ownerName: this.postAdForm.value.ownerName,
      costPerDay: +this.postAdForm.value.costPerDay,
      isOccupied: true,
      occupiedBy: 1,
      propertyPhotos: null
    };
    formData.append('property', JSON.stringify(property));
    this.appService.postAd(formData).subscribe(res => {
      console.log(this.postAdForm.value);
      console.log(res);

      setTimeout(() => {
        this.responseMessage = 'Ad posted successfully';
      }, 1000);
      this.responseMessage = '';
    }, () => {
      setTimeout(() => {
        this.responseMessage = 'Ad post failed';
      }, 1000);
      this.responseMessage = '';
    });
    this.postAdForm.reset();
  }
}

