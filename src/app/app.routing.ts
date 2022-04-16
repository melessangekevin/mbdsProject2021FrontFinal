import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {ListerAssignmentComponent} from './pages/assignments/lister-assignment/lister-assignment.component';
import {AjouterAssignmentComponent} from './pages/assignments/ajouter-assignment/ajouter-assignment.component';
import {DetaisAssignmentComponent} from './pages/assignments/detais-assignment/detais-assignment.component';
import {ModifierAssignmentComponent} from './pages/assignments/modifier-assignment/modifier-assignment.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      },
      {
        path: 'liste-assignment',
        component: ListerAssignmentComponent
      },
      {
        path: 'ajouter-assignment',
        component: AjouterAssignmentComponent
      },
      {
        path: 'details-assignment/:id',
        component: DetaisAssignmentComponent,
      },
      {
        path: 'modifier-assignment/:id/modifier',
        component: ModifierAssignmentComponent
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }, {
    path: '**',
    redirectTo: 'dashboard'
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
