import { HeaderComponent } from './header.component';
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
        HeaderComponent,
        MovieDetailsComponent,
        MoviesListComponent
      ],
      imports: [
        MaterialModule,
        RouterModule.forRoot(routes)
      ],
    }).compileComponents();
  }));

  it(`should have as text 'Movies database'`, async(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.mat-toolbar a').textContent).toContain('Movies database');
  }));
});