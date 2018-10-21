import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatienttypePage } from './patienttype';

@NgModule({
  declarations: [
    PatienttypePage,
  ],
  imports: [
    IonicPageModule.forChild(PatienttypePage),
  ],
})
export class PatienttypePageModule {}
