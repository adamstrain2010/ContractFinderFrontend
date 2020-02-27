import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContractFinderService } from './services/contract-finder.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
  ],
  providers: [
    ContractFinderService
  ]
})
export class DataModule { }
