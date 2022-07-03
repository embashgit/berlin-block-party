import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

export class JSONService {
constructor(protected _http:HttpClient){
}
private cor :string = 'https://rss2json.com/api.json?rss_url='

  public _get<T>(endPoint: string): Observable<T> {
    return this._http.get<T>(this.cor + endPoint).pipe(map((o)=>o))
}

}