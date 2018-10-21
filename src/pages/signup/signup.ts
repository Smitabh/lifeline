import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import{ AuthServiceProvider} from '../../providers/auth-service/auth-service';
// import {HttpClient, HttpHeaders } from '@angular/common/http';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
// buttonColor: string = '#000';

// @ViewChild('fname') ufname;
// @ViewChild('lname') ulname;
// @ViewChild('uname') uname;
// @ViewChild('email') email;
// @ViewChild('password') password;
// @ViewChild('mobile') mobile;


message:string;
createSuccess = false;
//submitted:boolean  = false ;

registerCredentials = {firstName:'', lastName :'',usrLoginId:'',mobileNo:'',emailId:'', usrPassword:''};

constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController) { }
 
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.registerCredentials ={ };
  }

   
    public SaveUser() {
      console.log("this.registerCredentials",this.registerCredentials);
    
      this.auth.addRegister(this.registerCredentials).then(success => {
        if (success) {
          this.createSuccess = true;
          this.message = 'Record successfully!';
          //this.showPopup("Success", "Account created successfully ");
        } else {
          this.message ='Problem creating user!';
         // this.showPopup("Error", "Problem creating new user");
        }
      },
        error => {
          this.showPopup("Error", error);
        });
    }
    

    showPopup(title, text) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: text,
        buttons: [
          {
            text: 'OK',
            handler: data => {
              if (this.createSuccess) {
                this.nav.popToRoot();
              }
            }
          }
        ]
      });
      alert.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  // presentLoading() {
  //   this.loadingCtrl.create({
  //     content: 'Please wait...',
  //     duration: 1500,
  //     dismissOnPageChange: true
  //   }).present();
  // }

  // openMenu() {
  //   let actionSheet = this.actionsheetCtrl.create({
  //     title: 'My Area',
  //     cssClass: 'action-sheets-basic-page',
  //     buttons: [
  //       {
  //         text: 'Shivajinagar',
  //         role: 'destructive',
  //         icon: !this.platform.is('ios') ? 'heart-outline' : null,
  //         handler: () => {
  //           console.log('Delete clicked');
  //         }
  //       },
  //       {
  //         text: 'Swargate',
  //         icon: !this.platform.is('ios') ? 'heart-outline' : null,
  //         handler: () => {
  //           console.log('Share clicked');
  //         }
  //       },
  //       {
  //         text: 'Katraj',
  //         icon: !this.platform.is('ios') ? 'heart-outline' : null,
  //         handler: () => {
  //           console.log('Play clicked');
  //         }
  //       },
  //       {
  //         text: 'Karve Nagar',
  //         icon: !this.platform.is('ios') ? 'heart-outline' : null,
  //         handler: () => {
  //           console.log('Favorite clicked');
  //         }
  //       },
  //       {
  //         text: 'Kondhwa',
  //         role: 'cancel', // will always sort to be on the bottom
  //         icon: !this.platform.is('ios') ? 'heart-outline' : null,
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }

  visitSignin()
{
  this.nav.push(SigninPage);     

};  


// addEvent(){
// this.buttonColor = '#345465'; //desired Color

// /*
// YOUR FUNCTION CODE
// */

// }


// saveUser(){
//   alert('hi');
//  console.log(this.user.fname);
//   /*
//   const headers = new HttpHeaders({
//     'Content-Type': 'application/json; charset=utf-8',
//     id: '105',
//     user_id: '90'
//   });

//   this.http.post('http://localhost:3000/signup',JSON.stringify( {fname:this.ufname.value,lname:this.ulname.value,uname:this.uname.value,password:this.password.value,mobile:this.mobile.value,email:this.email.value}),{headers:headers})
//   .subscribe(data => {

//     console.log(data);
    
//   })*/
//   //console.log(this.ufname.value,this.ulname.value,this.uname.value,this.password.value,this.mobile.value,this.email.value);
// }


}
