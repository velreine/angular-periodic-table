import { Component, OnInit } from '@angular/core';

import { Element } from '../element';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  public element: Element = null;
  


  constructor() { 
      this.element = new Element(1, 1.0079, 'H', 'Hydrogen', 0);
  }

  ngOnInit(): void {
  }

}
