import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Nav } from 'ionic-angular/umd/navigation/nav-interfaces';

/**
 * Generated class for the FindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find',
  templateUrl: 'find.html',
})
export class FindPage {
  rootPage:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindPage');
  }
 

}
