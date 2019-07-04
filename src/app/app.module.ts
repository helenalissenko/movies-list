import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HeaderComponent } from './layout/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgReduxModule,
    RouterModule.forRoot([
      { path: 'movies', component: MoviesListComponent },
      { path: 'movie/:id', component: MovieDetailsComponent },
      {
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full'
      },
      { path: '**', component: PageNotFoundComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    let enhancers = [];
    if (devTools.isEnabled()) {
      enhancers = [...enhancers, devTools.enhancer()];
    }
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [],
      enhancers);
  }
}