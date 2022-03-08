import React from 'react';

const Event = React.lazy(() => import('./views/events/Events'));
const Profile = React.lazy(() => import('./views/profile/Profile'));
const CreateEvent = React.lazy(() => import('./views/events/CreateEvent'));

const routes = [
  { path: '/', name: 'Event', component: Event },
  { path: 'profile', name: 'Profile', component: Profile },
  { path: 'create-event', name: 'Create Event', component: CreateEvent },
];

export default routes;