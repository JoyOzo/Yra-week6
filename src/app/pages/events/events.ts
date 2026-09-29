import { Component, signal } from '@angular/core';
import { ColorService } from '../../services/color';
import { NgStyle } from '@angular/common';

@Component({
  imports: [NgStyle],
  selector: 'app-events',
  styleUrl: './events.css',
  templateUrl: './events.html',
})
export class Events {
  message = signal('Hello, Events');
  backgroundColor = signal('white');

constructor(private colorService: ColorService) {
  this.colorService.color.subscribe((selectedColor) => {
    this.backgroundColor.set(selectedColor);
  });
  this.colorService.behaviorColor.subscribe((selectedColor) => {
  console.log('Events BehaviorSubject color:', selectedColor);
  this.backgroundColor.set(selectedColor);
});
}
}
