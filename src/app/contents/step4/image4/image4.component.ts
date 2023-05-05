import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image4',
  templateUrl: './image4.component.html',
  styleUrls: ['./image4.component.css']
})
export class Image4Component {
  @ViewChild('image', { read: ElementRef }) imageRef!: ElementRef<HTMLImageElement>;

  @Input() imageUrl!: string

  @Output() loaded = new EventEmitter<void>();

  get imageElement(): HTMLImageElement {
    return this.imageRef.nativeElement;
  }
}
