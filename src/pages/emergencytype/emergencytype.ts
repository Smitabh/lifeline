import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectcityPage } from '../selectcity/selectcity';

/**
 * Generated class for the EmergencytypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emergencytype',
  templateUrl: 'emergencytype.html',
})
export class EmergencytypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergencytypePage');
  }

   visitSelectcity()
{
  this.navCtrl.push(SelectcityPage);     

};  

}
