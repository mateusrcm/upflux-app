import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsModalContentComponent } from './details-modal-content.component';

describe('ModalTemplateComponent', () => {
  let component: DetailsModalContentComponent;
  let fixture: ComponentFixture<DetailsModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
