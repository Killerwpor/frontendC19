import {UserLoginInfo} from './../userLoginInfo';
import {SimulatorInfo} from './../simulatorInfo';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlLogin: string = "http://localhost:3000/api/user/login";
  private urlLogin2: string = "http://localhost:3000/api/user/getDataFromCompany";
  private urlLogin3: string = "http://localhost:3000/api/company/listSimulators2";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http:HttpClient) { }

  postLogin(data: UserLoginInfo):Observable<UserLoginInfo>{
    
    const body = new HttpParams()
    .set(`data`, (JSON.stringify(data)));
    return this.http.post<any>(this.urlLogin,body.toString(),{headers: this.httpHeaders});
  }

  postLogin2(data: UserLoginInfo):Observable<UserLoginInfo>{
    
    const body = new HttpParams()
    .set(`data`, (JSON.stringify(data)));
    return this.http.post<any>(this.urlLogin2,body.toString(),{headers: this.httpHeaders});
  }

  postLogin3(data: SimulatorInfo):Observable<any>{
    
    const body = new HttpParams()
    .set(`data`, (JSON.stringify(data)));
    return this.http.post<any>(this.urlLogin3,body.toString(),{headers: this.httpHeaders});
  }
}
