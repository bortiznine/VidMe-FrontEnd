import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidmelibraryComponent } from './vidmelibrary.component';

describe('VidmelibraryComponent', () => {
  let component: VidmelibraryComponent;
  let fixture: ComponentFixture<VidmelibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidmelibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidmelibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
