import { AfterViewInit, Component } from '@angular/core';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements AfterViewInit {
  images = [
    'assets/images/pexels-cat1.jpg',
    'assets/images/pexels-cat2.jpg',
    'assets/images/pexels-cat3.jpg',
  ]

  ngAfterViewInit(): void {
    GLightbox({});
  }
}
