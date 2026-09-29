import { Component, signal } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ColorService } from '../../services/color';
@Component({
  selector: 'app-home',
  imports: [NgStyle],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  message = signal('Hello, Home');
  backgroundColor = signal('white');

  constructor(private colorService: ColorService) {

  this.colorService.color.subscribe((selectedColor) => {
  console.log('Selected color:', selectedColor);
  this.backgroundColor.set(selectedColor);
});
this.colorService.behaviorColor.subscribe((selectedColor) => {
  console.log('BehaviorSubject color:', selectedColor);
  this.backgroundColor.set(selectedColor);
});

}
}