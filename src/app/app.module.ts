import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Step1Component } from './contents/step1/step1/step1.component';
import { Step2Component } from './contents/step2/step2/step2.component';
import { GalleryComponent } from './contents/step2/gallery/gallery.component';
import { ImageComponent } from './contents/step2/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    GalleryComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
