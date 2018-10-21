import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Data {
  items: any;
  
  // constructor(public http: HttpClient) {
  //   console.log('Hello DataProvider Provider');
  // }


  
 
    constructor() {
 
        this.items = [
            {title: 'one'},
            {title: 'two'},
            {title: 'three'},
            {title: 'four'},
            {title: 'five'},
            {title: 'six'}
        ]
 
    }
 
    filterItems(searchTerm){
 
        return this.items.filter((item) => {
          console.log(item);
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });    
 
    }
 

}
