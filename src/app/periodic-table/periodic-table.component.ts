import { Component, OnInit } from '@angular/core';

import { ElementsService } from '../elements.service';
import { Element } from '../element';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {

  public elements: Element[] = null;

  constructor(private _elementsService: ElementsService) {

    this.elements = Array.from(_elementsService.elements);

  }

  ngOnInit(): void {
  }

}
