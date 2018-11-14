import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { SearchPage } from '../search/search';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) slides:Slides;

  constructor(public navCtrl: NavController) {
  }
  // goToslide() {
  //   this.slides.slideTo(1);
  // }
  s() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  go(){
    this.navCtrl.push(SearchPage);
  }

}
