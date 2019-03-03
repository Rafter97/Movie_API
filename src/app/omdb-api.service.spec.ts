import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { OmdbApiService } from './omdb-api.service';

describe('OmdbApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OmdbApiService = TestBed.get(OmdbApiService);
    expect(service).toBeTruthy();
  });

  it(`should have as title 'MyMovieData'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('MyMovieData');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to MyMovieData!');
  });

});
