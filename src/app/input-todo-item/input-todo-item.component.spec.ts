import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTodoItemComponent } from './input-todo-item.component';

describe('InputTodoItemComponent', () => {
  let component: InputTodoItemComponent;
  let fixture: ComponentFixture<InputTodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTodoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
