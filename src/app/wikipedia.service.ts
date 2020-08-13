import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Element } from './element';


@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  private _baseUrl: string = "https://en.wikipedia.org/w/api.php";

  constructor(private _http: HttpClient) { }
  //https://en.wikipedia.org/w/api.php
  //?action=query&prop=extracts&format=json&exintro=&titles=Lithium
  public searchForElement(element: Element): Observable<object> {

    return this._http.get(this._baseUrl, {
      headers: null,
      observe: null,
      params: { 'action': 'query', 'prop': 'extracts', 'format': 'json', 'exintro': 'true', 'titles': element.name},
      reportProgress: false,
      responseType: 'json',
      withCredentials: false
    });


  }
}
