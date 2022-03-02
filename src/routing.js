import { Router } from '@vaadin/router';
import * as users from './works/users';

import './views/home-view';
import './views/form-example-view';
import './views/not-found-view';
import './views/data-binding';
import './views/works-view';
import './views/searcher-view';
import './views/storybook-view';
import './views/example-lit-element/example-modal';
import './views/example-lit-element/profile-user-view';
import './views/maintenance-user-view/register-view';
import './views/maintenance-user-view/dashboard-view';
import './works';


export const routing = (outlet) => {
  const router = new Router(outlet);

  var routes = [
    { path: '/', component: 'home-view' },
    { path: '/form-validation', component: 'form-example-view' },
    { path: '/data-binding', component: 'data-binding' },
    { path: '/works', component: 'works-view' },
    { path: '/searcher', component: 'searcher-view' },
    { path: '/storybook', component: 'storybook-view' },
    { path: '/profile', component: 'profile-user-view'},
    { path: '/modal', component: 'example-modal'},
    { path: '/register', component: 'register-view'},
    { path: '/dashboard', component: 'dashboard-view'},
    { path: '(.*)', component: 'not-found-view' },
  ];

  users.list.forEach((user) => {
    routes.unshift({ path: `/${user.toLowerCase()}`, component: `${user.toLowerCase()}-page` });
  });

  router.setRoutes(routes);
};
