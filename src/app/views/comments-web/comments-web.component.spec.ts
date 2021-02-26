import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsWebComponent } from './comments-web.component';

describe('CommentsWebComponent', () => {
  let component: CommentsWebComponent;
  let fixture: ComponentFixture<CommentsWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
