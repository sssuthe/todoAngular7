import { Component, OnInit } from '@angular/core';
import {TodoItemModel} from '../models/todoItem';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-display-todo-item',
  templateUrl: './display-todo-item.component.html',
  styleUrls: ['./display-todo-item.component.css']
})
export class DisplayTodoItemComponent implements OnInit {

  private subscriber: any;

  todoItem: TodoItemModel = new TodoItemModel({guid: "D21ds12x",
  userName: "enter user name here",
  todo: "enter todo description here"});

	constructor(private http: HttpClient, private route: ActivatedRoute) {

	}

	ngOnInit()
	{
		this.subscriber = this.route.params.subscribe(params => {

	       this.http.get(environment.resourceServer.todoUrl + params.uid).subscribe((data:any) => {

				this.todoItem = new TodoItemModel(data.todo);
		    });
	    });
	}

}
