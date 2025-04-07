import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComunicationComponent } from './nav-comunication.component';

describe('NavComunicacionComponent', () => {
  let component: NavComunicationComponent;
  let fixture: ComponentFixture<NavComunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComunicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavComunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
