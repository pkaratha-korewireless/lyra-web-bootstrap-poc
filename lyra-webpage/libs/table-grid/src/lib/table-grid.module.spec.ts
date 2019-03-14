import { async, TestBed } from '@angular/core/testing';
import { TableGridModule } from './table-grid.module';

describe('TableGridModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TableGridModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TableGridModule).toBeDefined();
  });
});
