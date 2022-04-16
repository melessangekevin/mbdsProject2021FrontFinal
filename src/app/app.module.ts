import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AjouterAssignmentComponent } from './pages/assignments/ajouter-assignment/ajouter-assignment.component';
import { ModifierAssignmentComponent } from './pages/assignments/modifier-assignment/modifier-assignment.component';
import { ListerAssignmentComponent } from './pages/assignments/lister-assignment/lister-assignment.component';
import { DetaisAssignmentComponent } from './pages/assignments/detais-assignment/detais-assignment.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AjouterAssignmentComponent,
    ModifierAssignmentComponent,
    ListerAssignmentComponent,
    DetaisAssignmentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
