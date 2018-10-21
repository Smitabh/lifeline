import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddareaPage } from './addarea';

@NgModule({
  declarations: [
    AddareaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddareaPage),
  ],
})
export class AddareaPageModule {}
