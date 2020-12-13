import { TestBed } from '@angular/core/testing';

import { DbConectionService } from './db-conection.service';

describe('DbConectionService', () => {
  let service: DbConectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbConectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
