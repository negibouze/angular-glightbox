import { AfterViewInit, Component, Input } from '@angular/core';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterViewInit {
  @Input() title = 'Gallery';
  @Input() images: string[] = [];

  ngAfterViewInit(): void {
    GLightbox({});
  }
}
