import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image3',
  templateUrl: './image3.component.html',
  styleUrls: ['./image3.component.css']
})
export class Image3Component {
  @ViewChild('image', { read: ElementRef }) imageRef!: ElementRef<HTMLImageElement>;

  @Input() imageUrl!: string

  @Output() loaded = new EventEmitter<void>();

  get imageElement(): HTMLImageElement {
    return this.imageRef.nativeElement;
  }
}
