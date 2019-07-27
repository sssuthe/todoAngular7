import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputTodoItemComponent } from './input-todo-item/input-todo-item.component';
import { DisplayTodoItemComponent } from './display-todo-item/display-todo-item.component';


import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthGuard } from './auth.guard';
import { ExternalApiComponent } from './external-api/external-api.component';

const routes: Routes = [
  {
    path: '',
    component: InputTodoItemComponent
  },
  {
    path: 'todo/:uid',
    component: DisplayTodoItemComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'logged-out',
    component: LoggedOutComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
     path: 'external-api',
     component: ExternalApiComponent,
     canActivate: [AuthGuard]
    }
];

@NgModule({
  declarations: [
    AppComponent,
    InputTodoItemComponent,
    DisplayTodoItemComponent,
    LoggedOutComponent,
    NavbarComponent,
    CallbackComponent,
    ProfileComponent,
    ExternalApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
