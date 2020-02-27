import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataModule } from '../data/data.module';
import { MainComponent } from './components/main/main.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { ToolbarContractTableComponent } from './components/shared/toolbars/toolbar-contract-table/toolbar-contract-table.component';
import { SeenPipe } from './components/main/pipes';

@NgModule({
  declarations: [MainComponent, ToolbarComponent, ToolbarContractTableComponent, SeenPipe],
  imports: [
    CommonModule,
    DataModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  exports: [
    MainComponent
  ]
})
export class ApplicationModule { }
