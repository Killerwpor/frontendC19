import { ChartPanelService } from './chart-panel.service';
import { TestBed } from '@angular/core/testing';


describe('ChartPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartPanelService = TestBed.get(ChartPanelService);
    expect(service).toBeTruthy();
  });
});