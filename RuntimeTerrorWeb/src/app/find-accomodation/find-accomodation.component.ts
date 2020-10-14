import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-accomodation',
  templateUrl: './find-accomodation.component.html',
  styleUrls: ['./find-accomodation.component.css']
})
export class FindAccomodationComponent implements OnInit {
  cities1: any
  constructor() {
    this.cities1 = [
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];
  }

  ngOnInit(): void {
  }

}
