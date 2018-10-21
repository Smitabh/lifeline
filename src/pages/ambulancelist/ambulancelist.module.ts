import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmbulancelistPage } from './ambulancelist';

@NgModule({
  declarations: [
    AmbulancelistPage,
  ],
  imports: [
    IonicPageModule.forChild(AmbulancelistPage),
  ],
})
export class AmbulancelistPageModule {}
