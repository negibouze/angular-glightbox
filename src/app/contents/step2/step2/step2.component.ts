import { Component } from '@angular/core';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component {
  galleries = [
    [
      'assets/images/pexels-cat4.jpg',
      'assets/images/pexels-cat5.jpg',
      'assets/images/pexels-cat6.jpg',
    ],
    [
      'assets/images/pexels-cat7.jpg',
      'assets/images/pexels-cat8.jpg',
      'assets/images/pexels-cat9.jpg',
    ],
  ]
}
