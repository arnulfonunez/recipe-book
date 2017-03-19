import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {User} from '../models/User';

declare var firebase:any;

@Injectable()
export class AuthenticationService {

   private isAuthenticated:boolean = false; 

  constructor(private router:Router) { }

  public isUserAuthenticated():boolean{
      
      let user:any = this.getActiveUser();
      if(user){
          return true;
      }
      else
      {
          return false;
      }
  }

public signup(user:User ):void { 
    console.log(user);
         firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
         .then(() => {
             this.isAuthenticated = true;
             this.router.navigate(['/recipes']); 
            }
             )         
         .catch(
           (error) =>
           {
             let errorCode = error.code;
             let errorMessage = error.message;
             this.isAuthenticated = false;
             console.log(errorCode);
             console.log(errorMessage);
           }
           ); 
     } 
 
 
     public login(user:User):void{ 
         console.log(user);
         return firebase.auth().signInWithEmailAndPassword(user.email,user.password)
         .then(() => {
             this.isAuthenticated = true;
             this.router.navigate(['/recipes']); 
            }
         )
         .catch(
           (error) =>
           {
             let errorCode = error.code;
             let errorMessage = error.message;
             this.isAuthenticated = false;
             console.log(errorCode);
             console.log(errorMessage);
           }
           );  
     } 
 
 
     public logout():void{ 
         return firebase.auth().signOut()
         .then(() =>{
             this.isAuthenticated = false;
             this.router.navigate(['/login']); 
         }
          
          )
         .catch((error) =>
           {
             let errorCode = error.code;
             let errorMessage = error.message;
             this.isAuthenticated = false;
             console.log(errorCode);
             console.log(errorMessage);
           }
           );  
     } 
 
 
     public getActiveUser(){ 
         return firebase.auth().currentUser;
     } 

/*
     public signup(user:User ):firebase.Promise<any> { 
         return firebase.auth().createUserWithEmailAndPassword(user.email,user.password); 
     } 
 
     public login(user:User):firebase.Promise<any>{ 
         return firebase.auth().signInWithEmailAndPassword(user.email,user.password); 
     } 
 
 
     public logout():firebase.Promise<any>{ 
         return firebase.auth().signOut(); 
     } 
 
 
     public getActiveUser(){ 
         return firebase.auth().currentUser; 
     } 
     */
}

