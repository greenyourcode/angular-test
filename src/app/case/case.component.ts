import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent {
  @Input() index = 0;
  @Output() caseChanged = new EventEmitter();

  constructor() { }

}
