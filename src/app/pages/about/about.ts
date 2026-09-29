import { Component, signal } from '@angular/core';
import { ColorService } from '../../services/color';
import { NgStyle } from '@angular/common';

@Component({
  imports: [NgStyle],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  message = signal('Hello, About');
  backgroundColor = signal('white');

constructor(private colorService: ColorService) {
  this.colorService.color.subscribe((selectedColor) => {
    this.backgroundColor.set(selectedColor);
  });
  this.colorService.behaviorColor.subscribe((selectedColor) => {
  console.log('About BehaviorSubject color:', selectedColor);
  this.backgroundColor.set(selectedColor);
});
}
}
