import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EventFeed } from '../models/events.model';
import * as converter from 'xml-js';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http:HttpClient){}
  // private cor :string = `https://cors-anywhere.herokuapp.com/`
  private baseUrl  = 'https://daten.berlin.de/datensaetze/rss.xml/berliner-stra%C3%9Fen-und-volksfeste-2020'

  public getAll(params:any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
  });
    return this.http.get(this.baseUrl,{ params:httpParams, responseType: 'text' }).pipe(map(this.extractFeeds))
  }


  extractFeeds(xml:string){
    let result1 = converter.xml2json(xml, {compact: true, spaces: 4});
  const {rss} = JSON.parse(result1);
  return new EventFeed(rss.channel);
  }
}
