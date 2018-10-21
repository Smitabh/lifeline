import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmergencytypePage } from '../emergencytype/emergencytype';


/**
 * Generated class for the PatienttypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patienttype',
  templateUrl: 'patienttype.html',
})
export class PatienttypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatienttypePage');
  }

   visitEmergencytype()
{
  this.navCtrl.push(EmergencytypePage);     

};  


}
