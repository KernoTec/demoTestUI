import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoDeleteComponent } from './vehiculo-delete.component';

describe('VehiculoDeleteComponent', () => {
  let component: VehiculoDeleteComponent;
  let fixture: ComponentFixture<VehiculoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
