import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalContentComponent } from './edit-modal-content.component';

describe('EditModalContentComponent', () => {
  let component: EditModalContentComponent;
  let fixture: ComponentFixture<EditModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
