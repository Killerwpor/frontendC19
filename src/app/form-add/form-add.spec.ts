import { FormAddService } from './form-add.service';
import { TestBed } from '@angular/core/testing';


describe('ChartPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormAddService = TestBed.get(FormAddService);
    expect(service).toBeTruthy();
  });
});