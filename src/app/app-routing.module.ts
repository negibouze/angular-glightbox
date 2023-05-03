import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step1Component } from './contents/step1/step1/step1.component';
import { Step2Component } from './contents/step2/step2/step2.component';

const routes: Routes = [
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
