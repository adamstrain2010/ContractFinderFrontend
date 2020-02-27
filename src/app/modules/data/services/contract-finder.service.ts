import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReedResponse } from "./../models/ReedResponse.model";


@Injectable({
  providedIn: 'root'
})
export class ContractFinderService {

  baseUrl: string = "https://localhost:44301/api/contracts";

  constructor(private http: HttpClient) { }

  GetContracts = () => {
    return this.http.get<ReedResponse[]>(`${this.baseUrl}/100`);
  }

  InsertView = (userId:number, jobId:number) => {
    return this.http.get(`${this.baseUrl}/${userId}/${jobId}`);
  }

  RemoveView = (userId:number, jobId:number) => {
    return this.http.delete(`${this.baseUrl}/${userId}/${jobId}`);
  }

}
