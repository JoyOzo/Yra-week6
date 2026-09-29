import { Component, signal } from '@angular/core';
import { ColorService } from '../../services/color';
import { NgStyle } from '@angular/common';

@Component({
  imports: [NgStyle],
  selector: 'app-media',
  styleUrl: './media.css',
  templateUrl: './media.html',
})
export class Media {
  message = signal('Hello, Media');
  backgroundColor = signal('white');

constructor(private colorService: ColorService) {
  this.colorService.color.subscribe((selectedColor) => {
    this.backgroundColor.set(selectedColor);
  });
  this.colorService.behaviorColor.subscribe((selectedColor) => {
  console.log('Media BehaviorSubject color:', selectedColor);
  this.backgroundColor.set(selectedColor);
});
}
}
