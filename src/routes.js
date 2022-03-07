import React from 'react';

const Event = React.lazy(() => import('./views/events/Events'));
const Profile = React.lazy(() => import('./views/profile/Profile'));

const routes = [
  { path: '/', name: 'Event', component: Event },
  { path: 'profile', name: 'Profile', component: Profile },
];

export default routes;