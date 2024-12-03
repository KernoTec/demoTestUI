import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVehiculosComponent } from './main-vehiculos.component';

describe('MainVehiculosComponent', () => {
  let component: MainVehiculosComponent;
  let fixture: ComponentFixture<MainVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainVehiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
