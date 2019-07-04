import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HeaderComponent } from './layout/header.component';
import { MaterialModule } from './material.module';

describe('AppComponent', () => {
  const routes: Routes = [
    { path: 'movies', component: MoviesListComponent },
    { path: 'movie/:id', component: MovieDetailsComponent },
    { path: '', redirectTo: '/movies', pathMatch: 'full' }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MoviesListComponent,
        MovieDetailsComponent,
        HeaderComponent
      ],
      imports: [
        MaterialModule,
        RouterModule.forRoot(routes)
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});