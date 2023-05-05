import { OnInit, Component, Input, QueryList, ViewChildren } from '@angular/core';
import GLightbox, { Glightbox as lightbox } from 'glightbox';
import { Image4Component } from '../image4/image4.component';

@Component({
  selector: 'app-gallery4',
  templateUrl: './gallery4.component.html',
  styleUrls: ['./gallery4.component.css']
})
export class Gallery4Component implements OnInit {
  @ViewChildren(Image4Component) imageComponents!: QueryList<Image4Component>;

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
      type: 'image',
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
