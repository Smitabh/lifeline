import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestApiProvider } from '../rest-api/rest-api';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
 // currentUser:User;
  usrPassword:string;
  emailId:string;
  registerCredentials = { usrPassword: '', emailId: '' };
  // currentUser:User;
  errmsg :string;
  AllUserData:string[];

    constructor(private http: HttpClient,private storage: Storage, public rest: RestApiProvider) { 
     this.getAllUserDtls();
    }
  
    getLoggedInUser() {
      return Observable.create(observer => {
        this.storage.get('username').then((val) => {
              observer.next(val);
              observer.complete();
        });
     });
    }
  addRegister(data) {
    console.log('in auth service---',data);
   alert('hi');
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:9090/saveUser', data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          console.log("IN Error of Post",err);
          reject(err);
        });
    });
    
  }

getUserRecords(){
    return this.http.get("http://localhost:9090/getUserRecord");
  }
  getAllUserDtls(){
    this.getUserRecords()
       .subscribe(
         data => { 
           this.AllUserData = data
           console.log( this.AllUserData );
          },
         error =>  this.errmsg = <any>error);
  }
  public login(credentials) {

    if (credentials.usrLoginId === null || credentials.emailId === null) {
      return Observable.throw("Please insert credentials");
    } else {

      console.log(credentials); 

      return Observable.create(observer => {

        this.getUserRecords().subscribe((data) => {
         
          this.AllUserData = data;
          console.log(this.AllUserData ); 
          for(let i = 0;i < this.AllUserData.length ;i++){
            if(this.AllUserData[i].emailId == credentials.emailId && this.AllUserData[i].usrPassword == credentials.usrPassword)
             {
              this.storage.set('Username as emailId', credentials.emailId);
                console.log(this.AllUserData[i].firstName);
             }
             else{
              this.storage.set('parameter not match', null);
              console.error('error');
             }
          }
        // At this point make a request to your backend to make a real check!
        //let access = (credentials.emailId === data.emailId && credentials.usrPassword === data.usrPassword);
  
        // console.log(access);
        // if(access){
        //   this.storage.set('Username as emailId', data.emailId);
        //   console.log(data.emailId);
        // }else{
        //   this.storage.set('Username is blank', null);
        //   console.log('error');
        // }

        observer.next(credentials.emailId);
        observer.complete();
      });

    });

    }
  }

}
