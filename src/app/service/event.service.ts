import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EventFeed, Isearchable } from '../models/events.model';
import * as converter from 'xml-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http:HttpClient){}
  private cor :string = environment.CORSURL
  private baseUrl  = environment.BASEURL
  private searchUrl = environment.SEARCHURL
  public getAll(params:any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
  });
    return this.http.get(this.cor + this.baseUrl,{ params:httpParams, responseType: 'text' }).pipe(map(this.extractFeeds))
  }


  public searchFeeds(params:any): Observable<Isearchable[]> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
  });
    return this.http.get<Isearchable[]>(this.cor + this.searchUrl,{ params:httpParams, responseType: 'json' }).pipe(map((res=>res)))
  }

  extractFeeds(xml:string){
    let result1 = converter.xml2json(xml, {compact: true, spaces: 4});
  const {rss} = JSON.parse(result1);
  return new EventFeed(rss.channel);
  }
}
