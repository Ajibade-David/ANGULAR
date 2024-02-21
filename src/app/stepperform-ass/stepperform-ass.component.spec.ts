import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperformAssComponent } from './stepperform-ass.component';

describe('StepperformAssComponent', () => {
  let component: StepperformAssComponent;
  let fixture: ComponentFixture<StepperformAssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperformAssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperformAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
