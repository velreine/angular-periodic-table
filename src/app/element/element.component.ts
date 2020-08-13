import { Component, OnInit, Input } from '@angular/core';

import { Element } from '../element';
import { ElementPhase } from '../element-phase.enum';
import { ElementType } from '../element-type.enum';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input() public element: Element = null;
  


  constructor() { 

    console.log(this.element);

    if (this.element === null)
      this.element = new Element(1, 1.0079, 'H', 'Hydrogen', 0, 1, 1,ElementPhase.Gas, ElementType.OtherNonMetallic);
  }

  ngOnInit(): void {
  }

}
