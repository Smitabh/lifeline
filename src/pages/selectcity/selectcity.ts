import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { Data } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';


@IonicPage()
@Component({
  selector: 'page-selectcity',
  templateUrl: 'selectcity.html',
})
export class SelectcityPage {

  search1: string='';
  searchControl: FormControl;
  items: any;
  searching: any = false;

  
  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService: Data) {     
   this.ionViewDidLoad();
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SelectcityPage');
  // }

  ionViewDidLoad() {
 
    this.setFilteredItems();
console.log("1");
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
        this.setFilteredItems();

    });


}
onSearchInput(){
  this.searching = true;
}
setFilteredItems() {
  console.log("2");
    this.items = this.dataService.filterItems(this.search1);
    console.log("3");
}



}
