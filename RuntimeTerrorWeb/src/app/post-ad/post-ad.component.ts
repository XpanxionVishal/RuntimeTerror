import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IUserListResult } from '../domain/IUserListResult';

@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.css']
})
export class PostAdComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) {

  }

  @ViewChild('fileInput') fileInput;
  cities: any;
  items: MenuItem[];
  uploadedFiles: any[] = [];
  fileModel: any = {
    fileContent: ''
  };
  public progress: number;
  public message: string;

  ngOnInit() {
    this.cities = [
      { label: 'Select City', value: null },
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];

    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];
  }

  onTemplateUpload() {
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
}
