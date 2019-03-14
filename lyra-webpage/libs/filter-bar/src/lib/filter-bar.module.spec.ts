import { async, TestBed } from '@angular/core/testing';
import { FilterBarModule } from './filter-bar.module';

describe('FilterBarModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FilterBarModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FilterBarModule).toBeDefined();
  });
});
