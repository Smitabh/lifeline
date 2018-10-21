import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule} from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomePageModule } from '../pages/home/home.module'; 

import { ProfilePage } from '../pages/profile/profile';
import { PatienttypePage } from '../pages/patienttype/patienttype';
import { EmergencytypePage } from '../pages/emergencytype/emergencytype';
import { UserlocationPage } from '../pages/userlocation/userlocation';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { EditprofilePage } from '../pages/editprofile/editprofile';
// import { SelectcityPage } from '../pages/selectcity/selectcity';
import { AdminPage } from '../pages/admin/admin';
import { AddambulancePage } from '../pages/addambulance/addambulance';
import { AmbulancelistPage } from '../pages/ambulancelist/ambulancelist';
import { AddareaPage } from '../pages/addarea/addarea';
import { GivenservicesPage } from '../pages/givenservices/givenservices';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../providers/data/data';
import { IonicStorageModule } from '@ionic/storage';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { RestApiProvider } from '../providers/rest-api/rest-api';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    PatienttypePage,
    EmergencytypePage,
    UserlocationPage,
    SigninPage,
    SignupPage,
    EditprofilePage,
    // SelectcityPage,
    AdminPage,
    AddambulancePage,
    AmbulancelistPage,
    AddareaPage,
    GivenservicesPage

  ],
  imports: [
    //HomePageModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    PatienttypePage,
    EmergencytypePage,
    UserlocationPage,
    SigninPage,
    SignupPage,
    EditprofilePage,
    // SelectcityPage,
    AdminPage,
    AdminPage,
    AddambulancePage,
    AmbulancelistPage,
    AddareaPage,
    GivenservicesPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data,
    AuthServiceProvider,
    RestApiProvider
  ]
})
export class AppModule {}
