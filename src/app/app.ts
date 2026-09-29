import { Component } from '@angular/core';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Programmes } from './pages/programmes/programmes';
import { Resources } from './pages/resources/resources';
import { Events } from './pages/events/events';
import { Media } from './pages/media/media';
import { Opportunities } from './pages/opportunities/opportunities';
import { Community } from './pages/community/community';
import { Login } from './pages/login/login';
import { Navbar } from './components/navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Home, About, Programmes, Resources, Events, Media, Opportunities, Community, Login, Navbar, RouterOutlet],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}