import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSpacesComponent } from './nav-spaces.component';

describe('NavSpacesComponent', () => {
  let component: NavSpacesComponent;
  let fixture: ComponentFixture<NavSpacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavSpacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
