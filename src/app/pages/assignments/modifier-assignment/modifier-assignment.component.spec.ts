import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAssignmentComponent } from './modifier-assignment.component';

describe('ModifierAssignmentComponent', () => {
  let component: ModifierAssignmentComponent;
  let fixture: ComponentFixture<ModifierAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
