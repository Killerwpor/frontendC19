import { CompanyPageInfo } from './page-company-list-info';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CompanyPageService {

  private urlCompany: string = "http://localhost:3000/api/clients/findCompanys";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http:HttpClient) { }

  postCompany(data: CompanyPageInfo):Observable<CompanyPageInfo>{
    
    const body = new HttpParams()
    .set(`data`, (JSON.stringify(data)));
    return this.http.post<any>(this.urlCompany,body.toString(),{headers: this.httpHeaders});
  }
}
