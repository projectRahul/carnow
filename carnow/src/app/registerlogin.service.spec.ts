import { TestBed } from '@angular/core/testing';

import { RegisterloginService } from './registerlogin.service';

describe('RegisterloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterloginService = TestBed.get(RegisterloginService);
    expect(service).toBeTruthy();
  });
});
