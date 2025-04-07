import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFilesComponent } from './nav-files.component';

describe('NavFilesComponent', () => {
  let component: NavFilesComponent;
  let fixture: ComponentFixture<NavFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavFilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
