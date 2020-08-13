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

  public searchForElement(element: Element): Observable<string> {
    
    return this._http.get(this._baseUrl, {
      headers: null,
      observe: null,
      params: null,
      reportProgress: false,
      responseType: 'text',
      withCredentials: false
    });
  }
}
