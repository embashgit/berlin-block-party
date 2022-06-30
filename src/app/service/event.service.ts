import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IFeed } from '../models/events.model';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http:HttpClient){}
  private cor :string = `https://rss2json.com/api.json?rss_url=`
  private baseUrl  = 'https://daten.berlin.de/datensaetze/rss.xml/berliner-stra%C3%9Fen-und-volksfeste-2020'

  public getAll(params:any): Observable<IFeed> {
    const query = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    return this.http.get<IFeed>(this.cor + this.baseUrl +'?'+ 'page=18').pipe(map((res) =>res))
  }
}

  