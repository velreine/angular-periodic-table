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

  }

  ngOnInit(): void {
  }

}
