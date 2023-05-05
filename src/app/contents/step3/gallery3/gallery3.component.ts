import { OnInit, Component, Input, QueryList, ViewChildren } from '@angular/core';
import GLightbox, { Glightbox as lightbox } from 'glightbox';
import { Image3Component } from '../image3/image3.component';

@Component({
  selector: 'app-gallery3',
  templateUrl: './gallery3.component.html',
  styleUrls: ['./gallery3.component.css']
})
export class Gallery3Component implements OnInit {
  @ViewChildren(Image3Component) imageComponents!: QueryList<Image3Component>;

  @Input() title = 'Gallery';
  @Input() images: string[] = [];

  private lightbox: lightbox | null = null;
  private imageElements: HTMLImageElement[] = [];
  private readonly handleImageClickBound = this.handleImageClick.bind(this)

  ngOnInit(): void {
    this.lightbox = GLightbox({});
  }

  loaded(): void {
    this.registerOnLightbox();
  }

  private registerOnLightbox(): void {
    if (!this.imageComponents) {
      return
    }
    this.imageElements = this.imageComponents.map(com => com.imageElement);
    this.imageElements.forEach(element => {
      element.removeEventListener('click', this.handleImageClickBound)
      element.addEventListener('click', this.handleImageClickBound)
    })
    const elements = this.imageElements.map(image => ({
      href: image.src,
    }))
    this.lightbox?.setElements(elements);
  }

  private handleImageClick(e: MouseEvent): void {
    e.preventDefault();
    const target = e.target;
    const index = target instanceof HTMLImageElement ? this.imageElements.indexOf(target) : 0
    this.lightbox?.openAt(index);
  }
}
