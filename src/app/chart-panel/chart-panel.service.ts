import { ChartPanelInfo } from "./../chartPanelInfo";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ChartPanelService {
  private urlPost: string = "http://localhost:3000/api/metrics/find";
  private urlCompany: string = "http://localhost:3000/api/metrics/findByCompany";
  private urlSupervisor: string = "http://localhost:3000/api/metrics/findBySupervisor"
  private urlDate: string = "http://localhost:3000/api/metrics/findByDate"
  private httpHeaders = new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  });

  constructor(private http: HttpClient) {}

  postChartPanel(data: any, type: string): Observable<any> {
    const body = new HttpParams().set(`data`, JSON.stringify(data));
    switch (type) {
      //Por usuario
      case "byUser":
        return this.http.post<any>(this.urlPost, body.toString(), {
          headers: this.httpHeaders
        });
        break;

      //Por compania
      case "byCompany":
        return this.http.post<any>(this.urlCompany, body.toString(), {
          headers: this.httpHeaders
        });
        break;

      //Por supervisor
      case "bySupervisor":
        return this.http.post<any>(this.urlSupervisor, body.toString(), {
          headers: this.httpHeaders
        });
        break;

        case "byDate":
        return this.http.post<any>(this.urlDate, body.toString(), {
          headers: this.httpHeaders
        });
        break;  
    }
  }
}
