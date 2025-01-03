import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
// import { HomesComponent } from './dashboard/homes/homes.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', loadComponent: () => import('./dashboard/homes/homes.component').then((m) => m.HomesComponent) },
            { path: 'car-list', loadComponent: () => import('./car-list/car-list.component').then((m) => m.CarListComponent) },
            { path: 'car-details', loadComponent: () => import('./car-details/car-details.component').then((m) => m.CarDetailsComponent) },
            { path: 'about', loadComponent: () => import('./dashboard/about-us/about-us.component').then((m) => m.AboutUsComponent) },
            { path: 'term-condition', loadComponent: () => import('./dashboard/term-condition/term-condition.component').then((m) => m.TermConditionComponent) },
            { path: 'feedback', loadComponent: () => import('./dashboard/feedback/feedback.component').then((m) => m.FeedbackComponent) },
            { path: 'policy', loadComponent: () => import('./dashboard/privacy-policy/privacy-policy.component').then((m) => m.PrivacyPolicyComponent) },
            { path: 'contact-us', loadComponent: () => import('./dashboard/contact-us/contact-us.component').then((m) => m.ContactUsComponent) },
            { path: 'careers', loadComponent: () => import('./dashboard/careers/careers.component').then((m) => m.CareersComponent) },
            { path: 'complaint', loadComponent: () => import('./dashboard/complaint/complaint.component').then((m) => m.ComplaintComponent) },
            { path: 'new-vehicle-details', loadComponent: () => import('./new-vehicle-details/new-vehicle-details.component').then((m) => m.NewVehicleDetailsComponent) },
            { path: 'images', loadComponent: () => import('./images/images.component').then((m) => m.ImagesComponent) },
            { path: 'vehicle-service', loadComponent: () => import('./vehicle-service/vehicle-service.component').then((m) => m.VehicleServiceComponent) },

            // { path: 'login', loadComponent: () => import('./Auth/login/login.component').then((m) => m.LoginComponent) },
            // { path: 'signup', loadComponent: () => import('./Auth/register/register.component').then((m) => m.RegisterComponent) },
        ]
    }


];
