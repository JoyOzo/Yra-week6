import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ColorService } from '../../services/color';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  constructor(public colorService: ColorService) {}

}