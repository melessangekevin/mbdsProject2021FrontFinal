import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAssignmentComponent } from './ajouter-assignment.component';

describe('AjouterAssignmentComponent', () => {
  let component: AjouterAssignmentComponent;
  let fixture: ComponentFixture<AjouterAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
