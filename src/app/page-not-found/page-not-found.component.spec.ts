import { PageNotFoundComponent } from './page-not-found.component';
import { TestBed, async } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MaterialModule } from '../material.module';

describe('HeaderComponent', () => {
  const routes: Routes = [
    { path: 'movies', component: MoviesListComponent },
    { path: 'movie/:id', component: MovieDetailsComponent },
    { path: '', redirectTo: '/movies', pathMatch: 'full' }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageNotFoundComponent,
        MovieDetailsComponent,
        MoviesListComponent
      ],
      imports: [
        MaterialModule,
        RouterModule.forRoot(routes)
      ],
    }).compileComponents();
  }));

  it(`should have 404 error message`, async(() => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card-title').textContent).toContain('404. Uh-oh, looks like you are lost');
  }));
});