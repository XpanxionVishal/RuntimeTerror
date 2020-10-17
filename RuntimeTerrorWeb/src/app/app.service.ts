import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICities } from 'src/domain/icities';
import { IArea } from 'src/domain/iarea';
import { IProperties } from 'src/domain/iproperties';
import { IPropertyType } from 'src/domain/iproperty-type';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getCities(): Observable<ICities> {
    return this.httpClient.get<ICities>(environment.apiUrl + 'Master/GetCities');
  }
}
