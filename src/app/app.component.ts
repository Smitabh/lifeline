import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormControl } from '@angular/forms';


import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { PatienttypePage } from '../pages/patienttype/patienttype';
import { EmergencytypePage } from '../pages/emergencytype/emergencytype';
import { UserlocationPage } from '../pages/userlocation/userlocation';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { SelectcityPage } from '../pages/selectcity/selectcity';
import { AdminPage } from '../pages/admin/admin';
import { AddambulancePage } from '../pages/addambulance/addambulance';
import { AmbulancelistPage } from '../pages/ambulancelist/ambulancelist';
import { AddareaPage } from '../pages/addarea/addarea';
import { GivenservicesPage } from '../pages/givenservices/givenservices';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'MyProfile', component: ProfilePage },
      { title: 'Patient Type', component: PatienttypePage },
      { title: 'Emergency Type', component: EmergencytypePage },
      { title: 'Current Location', component: UserlocationPage },
      { title: 'Sign in', component: SigninPage },
      { title: 'Sign up', component: SignupPage },
      { title: 'Editp rofile', component: EditprofilePage },
      { title: 'selectcity', component: SelectcityPage },
      { title: 'Admin', component: AdminPage },
      { title: 'Add Ambulance', component: AddambulancePage },
      { title: 'Ambulance list', component: AmbulancelistPage },
      { title: 'Add Area', component: AddareaPage },
      { title: 'Given services', component: GivenservicesPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
