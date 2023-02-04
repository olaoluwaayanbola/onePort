import Admin from "../assets/Logos/Admin.png"
import Rates from "../assets/Logos/Rates.png"
import Quotes from "../assets/Logos/Quotes.png"
import invoices from "../assets/Logos/invocies.png"
import Tracking from "../assets/Logos/Tracking.png"
import Customer from "..//assets/Logos/customers.png"
import Shippents from "../assets/Logos/shippment.png"
import Dashboard from "../assets/Logos/Dashboard.png"
import Documents from "../assets/Logos/Documents.png"

export interface LinkTypes {
    name: string,
    path: string,
    logo: any,
}

export const Links_Path = [
    {
        name: 'Dashboard',
        path: '/',
        logo: Dashboard
    },
    {
        name:'Admin',
        path: '/about',
        logo: Admin
    },
    {
        name: 'Customer',
        path: '/Customer',
        logo: Customer
    },
    {
        name:'Shipments',
        path: '/contact',
        logo: Shippents
    },
    {
        name:'Tracking',
        path: '/contact',
        logo: Tracking
    },
    {
        name: 'Documents',
        path: '/contact',
        logo: Documents
    },
    {
        name: 'Rates',
        path: '/contact',
        logo: Rates 
    },
    {
        name: 'Quotes',
        path: '/contact',
        logo: Quotes
    },
    {
        name: 'Invoices',
        path: '/contact',
        logo: invoices
    },
];