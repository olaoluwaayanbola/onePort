import Admin from '../assets/Logos/Admin.png';
import Rates from '../assets/Logos/Rates.png';
import Quotes from '../assets/Logos/Quotes.png';
import invoices from '../assets/Logos/invocies.png';
import Tracking from '../assets/Logos/Tracking.png';
import Customer from '..//assets/Logos/customers.png';
import Shippents from '../assets/Logos/shippment.png';
import Dashboard from '../assets/Logos/Dashboard.png';
import Documents from '../assets/Logos/Documents.png';

export interface LinkTypes {
  name: string;
  path: string;
  logo: any;
}

export const Links_Path: LinkTypes[] = [
  {
    name: 'Dashboard',
    path: '/Dashboard',
    logo: Dashboard,
  },
  {
    name: 'Admin',
    path: '/about',
    logo: Admin,
  },
  {
    name: 'Customer',
    path: '/',
    logo: Customer,
  },
  {
    name: 'Shipments',
    path: '/shipments',
    logo: Shippents,
  },
  {
    name: 'Tracking',
    path: '/Tracking',
    logo: Tracking,
  },
  {
    name: 'Documents',
    path: '/Documents',
    logo: Documents,
  },
  {
    name: 'Rates',
    path: '/Rates',
    logo: Rates,
  },
  {
    name: 'Quotes',
    path: '/Quotes',
    logo: Quotes,
  },
  {
    name: 'Invoices',
    path: '/Invoices',
    logo: invoices,
  },
];
