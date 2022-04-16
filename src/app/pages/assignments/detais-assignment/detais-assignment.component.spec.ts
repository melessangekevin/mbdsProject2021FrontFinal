import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaisAssignmentComponent } from './detais-assignment.component';

describe('DetaisAssignmentComponent', () => {
  let component: DetaisAssignmentComponent;
  let fixture: ComponentFixture<DetaisAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaisAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaisAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
