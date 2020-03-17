import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormAddService {

  private urlLogin: string = "http://localhost:3000/api/company/add";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http:HttpClient) { }

  postAddForm(data: any):Observable<any> {
    const body = new HttpParams()
    .set(`data`, (JSON.stringify(data)));
    return this.http.post<any>(this.urlLogin,body.toString(),{headers: this.httpHeaders});
  }
}
