import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  // const headers = new HttpHeaders().append('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }
  getCities(): Observable<ICities[]> {
    return this.httpClient.get<ICities[]>(environment.apiUrl + 'Master/GetCities/');
  }

  getArea(cityId): Observable<IArea[]> {
    return this.httpClient.get<IArea[]>(environment.apiUrl + 'Master/GetAreas/' + cityId);
  }

  getPropertyType(): Observable<IPropertyType[]> {
    return this.httpClient.get<IPropertyType[]>(environment.apiUrl + 'Master/GetPropertyTypes/');
  }

  getProperties(): Observable<IProperties[]> {
    return this.httpClient.get<IProperties[]>(environment.apiUrl + 'Property/GetProperties/');
  }

  postAd(property: IProperties): Observable<IProperties> {
    return this.httpClient.post<IProperties>(environment.apiUrl + 'Property/SaveProperty', property);
  }
}
