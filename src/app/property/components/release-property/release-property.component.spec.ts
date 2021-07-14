import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasePropertyComponent } from './release-property.component';

describe('ReleasePropertyComponent', () => {
  let component: ReleasePropertyComponent;
  let fixture: ComponentFixture<ReleasePropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleasePropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
