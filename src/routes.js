import React from 'react';

const Event = React.lazy(() => import('./views/events/Events'));
const Profile = React.lazy(() => import('./views/profile/Profile'));
const CreateEvent = React.lazy(() => import('./views/events/CreateEvent'));
const Sales = React.lazy(() => import('./views/sales/Sales'));
const ProSales = React.lazy(() => import('./views/proSales/ProSales'));
const InstalledSales = React.lazy(() => import('./views/installedSales/InstalledSales'));
const TotalInventory = React.lazy(() => import('./views/totalInventory/TotalInventory'));

const routes = [
  { path: '/', name: 'Event', component: Event },
  { path: 'profile', name: 'Profile', component: Profile },
  { path: 'create-event', name: 'Create Event', component: CreateEvent },
  { path: 'sales', name: 'Sales', component: Sales },
  { path: 'pro-sales', name: 'Pro Sales', component: ProSales },
  { path: 'installed-sales', name: 'Installed Sales', component: InstalledSales },
  { path: 'total-inventory', name: 'Total Inventory', component: TotalInventory },
];

export default routes;