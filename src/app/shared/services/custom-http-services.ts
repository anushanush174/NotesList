import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {ParamsModel} from '../models/params-model';

@Injectable({
  providedIn: 'root'
})

export class CustomHttpService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  get(path: string, params?: Array<ParamsModel>): Observable<any> {
    const httpParams = this.setHttpParams(params);
    return this.http.get(this.API_URL + '/' + path, {params: httpParams});
  }

  post(path: string, body: object, params?: Array<ParamsModel>): Observable<any> {
    const httpParams = this.setHttpParams(params);
    return this.http.post(this.API_URL + '/' + path, body, {params: httpParams});
  }

  put(path: string, body: object, params?: Array<ParamsModel>): Observable<any> {
    const httpParams = this.setHttpParams(params);
    return this.http.put(this.API_URL + '/' + path, body, {params: httpParams});
  }

  delete(path: string, id: number): Observable<any> {
    const httpParams = new HttpParams().set('_id', id);
    return this.http.delete(this.API_URL + '/' + path, {params: httpParams});
  }

  private setHttpParams(params?: Array<ParamsModel>): HttpParams {
    const httpParams = new HttpParams();
    if (params) {
      params.forEach(param => {
        httpParams.set(param.key, param.value);
      });
    }
    return httpParams;
  }
}
