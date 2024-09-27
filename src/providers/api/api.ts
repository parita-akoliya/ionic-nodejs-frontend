import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { constants } from "../../utils/constants";
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiUrl = "http://127.0.0.1:3000/";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
// const httpOptions1 = {
//   headers: new HttpHeaders(
//     { "Content-Type": "multipart/form-data" },
//     { "X-Requested-With": "XMLHttpRequest" }
//   )
//   headers.append("Content-Type", "multipart/form-data");
//   headers.append("X-Requested-With", "XMLHttpRequest");
// };
@Injectable()
export class ApiProvider {
  constructor(public http: HttpClient) {
    console.log("Hello ApiProvider Provider");
  }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  uploadCloudinaryImage(formData) {
    var headers = new HttpHeaders();
    headers.append("Content-Type", "multipart/form-data");
    headers.append("X-Requested-With", "XMLHttpRequest");
    return this.http.post(constants.cloudinary_account.link,formData,{ headers: headers})
    // return this.http.post(
    //   constants.cloudinary_account.link,
    //   formData,
    //   httpOptions1
    // );
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     "Content-Type": "multipart/form-data"
    //   })
    // };
    // return this.http
    //   .post(constants.cloudinary_account.link, formData, httpOptions)
    //   .pipe(map(formData));
    // return this.http
    //   .post(constants.cloudinary_account.link, formData, httpOptions)
    //   .pipe(response => {
    //     return response.json();
    //   })
    //   .catch(error => {
    //     return error.json();
    //   });
  }
  insertUrl(data): Observable<any> {
    return this.http.post(apiUrl + "url", JSON.stringify(data), httpOptions);
  }
  getUrl(): Observable<any> {
    return this.http
      .get(apiUrl + "url", httpOptions)
      .pipe(map(this.extractData));
  }
}
