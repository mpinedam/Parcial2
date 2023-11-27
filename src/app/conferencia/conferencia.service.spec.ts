/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { conferenciaService } from './conferencia.service';

describe('Service: conferencia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [conferenciaService]
    });
  });

  it('should ...', inject([conferenciaService], (service: conferenciaService) => {
    expect(service).toBeTruthy();
  }));
});
