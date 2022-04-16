import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerAssignmentComponent } from './lister-assignment.component';

describe('ListerAssignmentComponent', () => {
  let component: ListerAssignmentComponent;
  let fixture: ComponentFixture<ListerAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
