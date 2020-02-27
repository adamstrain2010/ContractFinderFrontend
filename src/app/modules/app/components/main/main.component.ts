import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ContractFinderService } from 'src/app/modules/data/services/contract-finder.service';

import { ReedResponse } from './../../../data/models/ReedResponse.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  contracts: ReedResponse[] = [];
  userId: number = 10000000;
  tableShowSeen: boolean = false;

  constructor(private contractFinderService: ContractFinderService, private ChangeDetRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.contractFinderService.GetContracts().subscribe((data: ReedResponse[]) => {
      this.contracts = data;
      console.log(this.contracts);
    })
  }

  MarkContractAsViewed = (contract: ReedResponse) => {
    console.log(contract);
    if(contract.seen){
      this.contractFinderService.InsertView(this.userId, contract.jobId).subscribe((data:any) => {
        console.log("added");
      })
    }
    else{
      this.contractFinderService.RemoveView(this.userId, contract.jobId).subscribe((data:any) => {
        console.log("removed");
      })
    }
    // this.ChangeDetRef.detectChanges();
  }

  doSomething = (e) => {
    this.tableShowSeen = e;
  }

}
