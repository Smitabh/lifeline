import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PatienttypePage } from '../patienttype/patienttype';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  visitPatienttype()
{
  this.navCtrl.push(PatienttypePage);     

};  

}
