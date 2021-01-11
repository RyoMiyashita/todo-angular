import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDoingComponent } from './todo-doing.component';

describe('TodoDoingComponent', () => {
  let component: TodoDoingComponent;
  let fixture: ComponentFixture<TodoDoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDoingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
