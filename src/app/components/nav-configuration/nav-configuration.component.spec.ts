import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavConfigurationComponent } from './nav-configuration.component';

describe('NavConfigurationComponent', () => {
  let component: NavConfigurationComponent;
  let fixture: ComponentFixture<NavConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavConfigurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
