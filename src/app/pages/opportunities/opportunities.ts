import { Component, signal } from '@angular/core';
import { ColorService } from '../../services/color';
import { NgStyle } from '@angular/common';

@Component({
  imports: [NgStyle],
  selector: 'app-opportunities',
  styleUrl: './opportunities.css',
  templateUrl: './opportunities.html',
})
export class Opportunities {
  message = signal('Hello, Opportunities');
  backgroundColor = signal('white');

constructor(private colorService: ColorService) {
  this.colorService.color.subscribe((selectedColor) => {
    this.backgroundColor.set(selectedColor);
  });
  this.colorService.behaviorColor.subscribe((selectedColor) => {
  console.log('Opportunities BehaviorSubject color:', selectedColor);
  this.backgroundColor.set(selectedColor);
});
}
}
