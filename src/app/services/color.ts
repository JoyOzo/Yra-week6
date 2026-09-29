import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  color = new Subject<string>();

  behaviorColor = new BehaviorSubject<string>('white');
}