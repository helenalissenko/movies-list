import { TestBed, async } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MaterialModule } from '../material.module';
import { By } from '@angular/platform-browser';
import { NgReduxModule } from '@angular-redux/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeaderComponent', () => {
  const routes: Routes = [
    { path: 'movies', component: MoviesListComponent },
    { path: 'movie/:id', component: MovieDetailsComponent },
    { path: '', redirectTo: '/movies', pathMatch: 'full' }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieDetailsComponent,
        MoviesListComponent
      ],
      imports: [
        MaterialModule,
        NgReduxModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes)
      ],
    }).compileComponents();
  }));

  it(`should have search input`, async(() => {
    const fixture = TestBed.createComponent(MoviesListComponent);
    fixture.detectChanges();
    const addItemDebugElement = fixture.debugElement.query(By.css('.mat-input-element'));
    expect(addItemDebugElement).toBeTruthy();
  }));
});