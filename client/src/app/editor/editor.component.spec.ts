import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorComponent } from './editor.component';


//describing the test suite
describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

//configuring the module with testing environment
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorComponent ]
    })
    .compileComponents();
  }));

  //creating fixtures
  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //testing components creation
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
