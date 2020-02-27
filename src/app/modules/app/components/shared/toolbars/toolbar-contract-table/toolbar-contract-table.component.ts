import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar-contract-table',
  templateUrl: './toolbar-contract-table.component.html',
  styleUrls: ['./toolbar-contract-table.component.scss']
})
export class ToolbarContractTableComponent implements OnInit {

  seenShownStatus: boolean = null;
  @Output() seenShown: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.seenShownStatus = false;
  }

  toggleSeenShownOut = () => {
    this.seenShown.emit(this.seenShownStatus);
  }

}
