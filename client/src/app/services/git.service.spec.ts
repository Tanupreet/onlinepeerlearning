import { TestBed, inject } from '@angular/core/testing';

import { GitService } from './git.service';

describe('GitService', () => {

	//configuring the module with testing environment
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitService]
    });
  });

  //checking component creation
  it('should be created', inject([GitService], (service: GitService) => {
    expect(service).toBeTruthy();
  }));
});
