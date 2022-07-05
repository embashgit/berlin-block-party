import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EventService } from './event.service';

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[EventService]
    });
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have getData function', () => {
    const service = TestBed.inject(EventService);
    expect(service.getAll).toBeTruthy();
   });
   it('should have searchData function', () => {
    const service = TestBed.inject(EventService);
    expect(service.searchFeeds).toBeTruthy();
   });
   it('should have extract Feeds function', () => {
    const service = TestBed.inject(EventService);
    expect(service.extractFeeds).toBeTruthy();
   });
});

