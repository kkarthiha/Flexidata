import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupdeatilsComponent } from './popupdeatils.component';

describe('PopupdeatilsComponent', () => {
  let component: PopupdeatilsComponent;
  let fixture: ComponentFixture<PopupdeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupdeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupdeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
