import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-input-todo-item',
  templateUrl: './input-todo-item.component.html',
  styleUrls: ['./input-todo-item.component.css']
})
export class InputTodoItemComponent implements OnInit {

  registered = false;
	submitted = false;
	todoForm: FormGroup;
	guid: string;
	serviceErrors:any = {};

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router)
  {
  	this.http.get('/api/v1/generate_uid').subscribe((data:any) => {
      this.guid = data.guid;
    }, error => {
        console.log("There was an error generating the proper GUID on the server", error);
    });
  }
  invalidUsername()
  {
  	return (this.submitted && (this.serviceErrors.userName != null || this.todoForm.controls.userName.errors != null));
  }

  invalidTodoText()
  {
  	return (this.submitted && (this.serviceErrors.todo != null || this.todoForm.controls.todo.errors != null));
  }

  ngOnInit() {
  	this.todoForm = this.formBuilder.group({
  		userName: ['', [Validators.required, Validators.maxLength(50)]],
  		todo: ['', [Validators.required, Validators.maxLength(100)]]
  	});
  }


  onSubmit()
  {
  	this.submitted = true;

  	if(this.todoForm.invalid == true)
  	{
  		return;
  	}
  	else
  	{
  		let data: any = Object.assign({guid: this.guid}, this.todoForm.value);

  		this.http.post('/api/v1/todo', data).subscribe((data:any) => {

	      let path = '/todo/' + data.todo.uid;
        //Navigate to the details page of the todo item we just made
	      this.router.navigate([path]);
	    }, error =>
	    {
	    	this.serviceErrors = error.error.error;
        });

  		this.registered = true;
  	}
  }

}
