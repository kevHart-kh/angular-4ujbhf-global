import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {
  private Data = 'abc';
  constructor() { }

  public getData(){
    return this.Data;
  }

  public setData(dataBaru){
    this.Data = dataBaru;
  }

}