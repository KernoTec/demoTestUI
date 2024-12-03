import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAsignacionComponent } from './cliente-asignacion.component';

describe('ClienteAsignacionComponent', () => {
  let component: ClienteAsignacionComponent;
  let fixture: ComponentFixture<ClienteAsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteAsignacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
