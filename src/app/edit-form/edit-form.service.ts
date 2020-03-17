import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EditService {
  private urlPost: string = "http://localhost:3000/api/user/editUser";
  private urlDelete: string = "http://localhost:3000/api/user/deleteUser";
  private httpHeaders = new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  });

  constructor(private http: HttpClient) {}

  editUser(data: any):Observable<any> {
    // const body = new HttpParams().set(`data`, JSON.stringify(data));
    // return this.http.post<any>(this.urlPost, body.toString(), {
    //   headers: this.httpHeaders
    // });

    let body = new FormData();
    body.append('id', data.id);
    body.append('photo', data.photo);
    body.append("email", data.email);
    body.append("name", data.name);
    body.append("phone", data.phone);
    body.append("job", data.job);

    return this.http.post<any>(this.urlPost,body);
  }


  deleteUser(data: any):Observable<any> {
    const body = new HttpParams()
    .set(`data`, (JSON.stringify(data)));
    return this.http.post<any>(this.urlDelete,body.toString(),{headers: this.httpHeaders});
  }
}