import { TestBed, inject } from '@angular/core/testing';

import { EditorService } from './editor.service';



describe('EditorService', () => {

	//configuring the module with testing environment
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditorService]
    });
  });

  //checking component creation
  it('should be created', inject([EditorService], (service: EditorService) => {
    expect(service).toBeTruthy();
  }));
});
