import { Component } from '@angular/core';
import { GlobSerService } from './glob-ser.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  data : String;
  dataskr : String = '';

  constructor (public varglob : GlobSerService){
    this.data = this.varglob.getData();
  }

  ubahData(){
    this.varglob.setData(this.dataskr);
    this.data = this.varglob.getData();
  }
}
