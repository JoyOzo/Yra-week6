import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Programmes } from './pages/programmes/programmes';
import { Resources } from './pages/resources/resources';
import { Events } from './pages/events/events';
import { Media } from './pages/media/media';
import { Opportunities } from './pages/opportunities/opportunities';
import { Community } from './pages/community/community';
import { Login } from './pages/login/login';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'programmes',
    component: Programmes
  },
  {
  path: 'resources',
  component: Resources
},
{
  path: 'events',
  component: Events
}, 
{
  path: 'media',
  component: Media
},
{
  path: 'opportunities',
  component: Opportunities
},
{
  path: 'community',
  component: Community
},
{
  path: 'login',
  component: Login
}
];