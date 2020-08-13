import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ElementsService } from '../elements.service';
import { Element } from '../element';

import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-element-detail',
  templateUrl: './element-detail.component.html',
  styleUrls: ['./element-detail.component.css']
})
export class ElementDetailComponent implements OnInit {

  public element: Element = null;

  public htmlFromWiki: string = null;

  constructor(private _route: ActivatedRoute,
    private _elementsService: ElementsService,
    private _wikiService: WikipediaService
    ) { }

  ngOnInit(): void {


    this._route.params.subscribe(params => {

      let identifier = +params['atomicNumber'];

      let foundElement = this._elementsService.elements.find(item =>
        item.atomicNumber === identifier);

      this.element = foundElement;
    });

    
    this._wikiService.searchForElement(this.element).subscribe(data => {
      this.htmlFromWiki = data.query.pages[0].extract;
    });



  }

}
