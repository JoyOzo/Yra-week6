import { Component, signal } from '@angular/core';
import { ColorService } from '../../services/color';
import { NgStyle } from '@angular/common';

@Component({
  imports: [NgStyle],
  selector: 'app-community',
  styleUrl: './community.css',
  templateUrl: './community.html',
})
export class Community {
  message = signal('Hello, Community');
  backgroundColor = signal('white');

constructor(private colorService: ColorService) {
  this.colorService.color.subscribe((selectedColor) => {
    this.backgroundColor.set(selectedColor);
  });
  this.colorService.behaviorColor.subscribe((selectedColor) => {
  console.log('Community BehaviorSubject color:', selectedColor);
  this.backgroundColor.set(selectedColor);
});
}
}
