import { TestBed } from '@angular/core/testing';

import { CattusBoardService } from './cattus-board.service';

describe('CattusBoardService', () => {
  let service: CattusBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CattusBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
