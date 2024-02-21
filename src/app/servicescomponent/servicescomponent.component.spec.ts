import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicescomponentComponent } from './servicescomponent.component';

describe('ServicescomponentComponent', () => {
  let component: ServicescomponentComponent;
  let fixture: ComponentFixture<ServicescomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicescomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
