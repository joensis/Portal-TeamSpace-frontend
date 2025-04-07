import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComunicacionComponent } from './nav-comunicacion.component';

describe('NavComunicacionComponent', () => {
  let component: NavComunicacionComponent;
  let fixture: ComponentFixture<NavComunicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComunicacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavComunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
