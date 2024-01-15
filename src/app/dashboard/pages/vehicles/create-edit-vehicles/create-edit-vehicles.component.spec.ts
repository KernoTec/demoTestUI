import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditVehiclesComponent } from './create-edit-vehicles.component';

describe('CreateEditVehiclesComponent', () => {
  let component: CreateEditVehiclesComponent;
  let fixture: ComponentFixture<CreateEditVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
