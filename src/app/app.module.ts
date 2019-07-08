import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputTodoItemComponent } from './input-todo-item/input-todo-item.component';
import { DisplayTodoItemComponent } from './display-todo-item/display-todo-item.component';


import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: InputTodoItemComponent
  },
  {
    path: 'todo/:uid',
    component: DisplayTodoItemComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    InputTodoItemComponent,
    DisplayTodoItemComponent
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
