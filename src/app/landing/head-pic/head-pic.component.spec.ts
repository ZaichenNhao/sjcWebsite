import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadPicComponent } from './head-pic.component';

describe('HeadPicComponent', () => {
  let component: HeadPicComponent;
  let fixture: ComponentFixture<HeadPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
