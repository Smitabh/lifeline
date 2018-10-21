import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading,AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';



/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  loading: Loading;
  registerCredentials = { usrPassword: '', emailId: '' };
 

  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  // presentLoading() {
  //   this.loadingCtrl.create({
  //     content: 'Please wait...',
  //     duration: 1500,
  //     dismissOnPageChange: true
  //   }).present();

  

  public Login(){
      this.showLoading()
      this.auth.login(this.registerCredentials).subscribe(allowed=>{
   
       this.auth.getLoggedInUser().subscribe(data=>{
         console.log("After sub",data);
         
       }); 
         if(allowed){
           console.log(allowed);
           this.showSuccess('Login success')
           console.log('Login successfully');
          // this.nav.setRoot('HomePage') 
         }else{
           this.showError("Access Denied");
         }
       }, 
       error =>{
         this.showError(error);
       });
    }

  showLoading(){
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...',
        dismissOnPageChange: true
      });
      this.loading.present();
    }
   
    showSuccess(txt){
     this.loading.dismiss();
     let alert = this.alertCtrl.create({
       title:'success',
       subTitle:txt,
       buttons:['Ok']
     });
     alert.present();
    }
   
    showError(txt){
      this.loading.dismiss();
      let alert = this.alertCtrl.create({
        title:'Error',
        subTitle:txt,
        buttons:['Ok']
      });
      alert.present();
     }
   
    visitSignup()
    {
      this.nav.push(SignupPage);     

    };  
}