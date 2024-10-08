import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export enum AppRoutes {
  Admin = 'admin',
  User = 'user',
  Rentals = 'rentals',
  Branches = 'branches',
  Cars = 'cars',
  Customers = 'customers',
  CarRentals = 'car-rentals',
  Reservations = 'reservations',
}

export const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.Admin + "/" + AppRoutes.Rentals,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.Admin,
    component: LayoutComponent,
    children: [
      {
        path: AppRoutes.Rentals,
        loadComponent: () =>
          import('./rentals/rentals.component').then((c) => c.RentalsComponent),
      },
      {
        path: AppRoutes.Branches,
        loadComponent: () =>
          import('./branches/branches.component').then((c) => c.BranchesComponent),
      },
      {
        path: AppRoutes.Cars,
        loadComponent: () =>
          import('./cars/cars.component').then((c) => c.CarsComponent),
      },
      {
        path: AppRoutes.Customers,
        loadComponent: () =>
          import('./customers/customers.component').then((c) => c.CustomersComponent),
      },
      {
        path: AppRoutes.Reservations,
        loadComponent: () =>
          import('./reservations/reservations.component').then((c) => c.ReservationsComponent),
      },
    ],
  },
  {
    path: AppRoutes.User,
    component: LayoutComponent,
    children: [
      {
        path: AppRoutes.CarRentals,
        loadComponent: () =>
          import('./car-rentals/car-rentals.component').then((c) => c.CarRentalsComponent),
      }
    ]
  }
];
