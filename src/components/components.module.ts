import { NgModule } from '@angular/core';
import { BComponent } from './b/b';
import { CComponent } from './c/c';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [BComponent,
    CComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot(ComponentsModule)
	],
	exports: [BComponent,
    CComponent]
})
export class ComponentsModule {}
