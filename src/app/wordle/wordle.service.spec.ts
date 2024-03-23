import { TestBed } from '@angular/core/testing';

import { WordleService } from './wordle.service';
import { wordles } from '../data/wordles';

describe('WordleService', () => {
  let service: WordleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('wordles array should have elements', () => {
    expect(service.activeWordleArray.length).toBeGreaterThan(0);
  });
  it('guessHistory array should initilize empty', () => {
    expect(service.guessHistory.length).toEqual(0);
  });
});
