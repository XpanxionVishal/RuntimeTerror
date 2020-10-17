import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-find-accomodation',
  templateUrl: './find-accomodation.component.html',
  styleUrls: ['./find-accomodation.component.css']
})
export class FindAccomodationComponent implements OnInit {
  cities1: any
  constructor(private appService: AppService) {
    // this.cities1 = [
    //   { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
    //   { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
    //   { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
    //   { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
    //   { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    // ];
  }

  ngOnInit(): void {
    this.appService.getCities().subscribe(city => {
      this.cities1 = city;
    });
  }

  // getServicePortfolioComboItems(data: IServicePortfolio[]): Array<SelectItem> {
  //   const items: Array<SelectItem> = this.addFirstItem();

  //   if (data) {
  //     data.forEach(element => {
  //       const item = new ComboItems();
  //       const subItems = new ComboItemValue();

  //       // item
  //       item.label = element.portfolioName;

  //       // item value
  //       subItems.id = element.servicePortfolioId;
  //       subItems.code = element.portfolioName;
  //       subItems.name = element.portfolioName;

  //       item.value = subItems;
  //       items.push(item);
  //     });
  //     return items;
  //   }
  // }
}
