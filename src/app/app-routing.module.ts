import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step1Component } from './contents/step1/step1/step1.component';
import { Step2Component } from './contents/step2/step2/step2.component';
import { Step3Component } from './contents/step3/step3/step3.component';
import { Step4Component } from './contents/step4/step4/step4.component';

const routes: Routes = [
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component },
  { path: 'step3', component: Step3Component },
  { path: 'step4', component: Step4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
