import { Component, signal } from '@angular/core';
import { ColorService } from '../../services/color';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-programmes',
  imports: [NgStyle],
  templateUrl: './programmes.html',
  styleUrl: './programmes.css'
})
export class Programmes {
  message = signal('Hello, Programmes');
  backgroundColor = signal('white');

constructor(private colorService: ColorService) {
  this.colorService.color.subscribe((selectedColor) => {
    this.backgroundColor.set(selectedColor);
  });
  this.colorService.behaviorColor.subscribe((selectedColor) => {
  console.log('Programmes BehaviorSubject color:', selectedColor);
  this.backgroundColor.set(selectedColor);
});
}
}