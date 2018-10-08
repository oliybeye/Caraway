import { RegisterPage } from './../register/register';
import { HomePage } from './../home/home';
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string;
  password: string;
  isUserLogged: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private user: UserProvider) {
      this.username = 'oliyadbeyene';
      this.password = 'pass';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  signIn() {
    
    if(this.user.validateUser(this.username, this.password)){
      this.navCtrl.setRoot(HomePage);
    }
    
  }

  signUp() {
    this.navCtrl.push(RegisterPage);
  }
}
