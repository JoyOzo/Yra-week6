import { Component, signal } from '@angular/core';
import { ColorService } from '../../services/color';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-resources',
  imports: [NgStyle],
  templateUrl: './resources.html',
  styleUrl: './resources.css'
})
export class Resources {
  message = signal('Hello, Resources');
  backgroundColor = signal('white');

constructor(private colorService: ColorService) {
  this.colorService.color.subscribe((selectedColor) => {
    this.backgroundColor.set(selectedColor);
  });
  this.colorService.behaviorColor.subscribe((selectedColor) => {
  console.log('Resources BehaviorSubject color:', selectedColor);
  this.backgroundColor.set(selectedColor);
});
}
}