import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoShowComponent } from './vehiculo-show.component';

describe('VehiculoShowComponent', () => {
  let component: VehiculoShowComponent;
  let fixture: ComponentFixture<VehiculoShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
