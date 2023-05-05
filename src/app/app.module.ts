import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Step1Component } from './contents/step1/step1/step1.component';
import { Step2Component } from './contents/step2/step2/step2.component';
import { GalleryComponent } from './contents/step2/gallery/gallery.component';
import { ImageComponent } from './contents/step2/image/image.component';
import { Step3Component } from './contents/step3/step3/step3.component';
import { Gallery3Component } from './contents/step3/gallery3/gallery3.component';
import { Image3Component } from './contents/step3/image3/image3.component';
import { Step4Component } from './contents/step4/step4/step4.component';
import { Gallery4Component } from './contents/step4/gallery4/gallery4.component';
import { Image4Component } from './contents/step4/image4/image4.component';

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    GalleryComponent,
    ImageComponent,
    Step3Component,
    Gallery3Component,
    Image3Component,
    Step4Component,
    Gallery4Component,
    Image4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
