import { Component} from '@angular/core';
import { NavController, ModalController,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  ionViewDidEnter(){
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
       Object.keys(elements).map((key) => {
          elements[key].style.display = 'none';
         });
       }   
  }
  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
	   Object.keys(elements).map((key) => {
    		elements[key].style.display = 'flex';
	});
    }
}
close(){
  this.navCtrl.pop();
}
  constructor(public navCtrl: NavController,public ModalCtrl:ModalController,public viewCtrl:ViewController) {

  }
  // ionViewDidLoad(){
  //   let profileModal= this.modalCtrl.create();
  //   profileModal.present;
  // }
  
}
