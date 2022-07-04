import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EventFeed } from '../models/events.model';
import * as converter from 'xml-js';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http:HttpClient){}
  private cor :string = `https://bash-cors-any.herokuapp.com/`
  private baseUrl  = 'https://daten.berlin.de/datensaetze/berliner-stra%C3%9Fen-und-volksfeste-2020'
  //  'https://daten.berlin.de/datensaetze/rss.xml/berliner-stra%C3%9Fen-und-volksfeste-2020' 50
// https://daten.berlin.de/datensaetze/berliner-stra%C3%9Fen-und-volksfeste-2020
  public getAll(params:any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
  });
    return this.http.get(this.cor + this.baseUrl,{ params:httpParams, responseType:"text" }).pipe(map(this.extractFeeds))
  }


  extractFeeds(xml:string){
    // console.log(xml)
    // let result1 = converter.xml2json(xml, {compact: true, spaces: 4});
  // const rss = JSON.parse(xml);
  return xml;
  // return new EventFeed(rss.channel);
  }


//    converter(dom: any) {
//     if (dom.nodeType === Node.TEXT_NODE) {
//         return dom.nodeValue;
//     }
//     if (dom.nodeType === Node.DOCUMENT_NODE) {
//         dom = dom.documentElement;
//     }
//     const obj = {};
//     obj.nodeType = dom.nodeType;
//     if (dom.nodeType === Node.ELEMENT_NODE) {
//         obj.tagName = dom.tagName;
//         obj.attributes = []; // Array.from(obj.attributes) gives us a lot of things we don't want
//         for (let i = 0, len = dom.attributes.length; i < len; ++i) {
//             const attr = dom.attributes[i];
//             obj.attributes.push({name: attr.name, value: attr.value});
//         }
//         obj.children = [];
//         for (let child = dom.firstChild; child; child = child.nextSibling) {
//             obj.children.push(converter(child));
//         }
//     } else {
//         obj.nodeValue = dom.nodeValue;
//     }
//     return obj;
// }
}
