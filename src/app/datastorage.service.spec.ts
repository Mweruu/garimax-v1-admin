import { TestBed } from '@angular/core/testing';
import { DataStorageService } from './datastorage.service';

describe('DatastorageService', () => {
  let service: DataStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
