import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { SET_SEARCH_FILTER, SET_SEARCH_TERM } from '../actions';
import { movies } from '../../data/movie.mock-data';
import { GenreType, genreType } from '../../data/movie.model';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  @select() searchFilter;
  @select() searchTerm;
  moviesList = movies;
  genres = Object.values(genreType);
  selectedGenre = '';
  enteredTerm = '';
  constructor(
    private router: Router,
    private ngRedux: NgRedux<IAppState>
  ) {
  }

  ngOnInit() {
    this.searchFilter.subscribe((value: string) => {
      this.selectedGenre = value;
      if (value.length) {
        this.moviesList = movies.filter(movie => movie.genres.indexOf(this.selectedGenre) > -1);
      } else if (!this.selectedGenre.length && !this.enteredTerm.length) {
        this.moviesList = movies;
      }
    });
    this.searchTerm.subscribe((value: string) => {
      this.enteredTerm = value;
      if (value.length) {
        this.moviesList = this.moviesList.filter(movie => movie.name.toLowerCase().indexOf(this.enteredTerm.toLowerCase()) > -1);
      } else if (!this.selectedGenre.length && !this.enteredTerm.length) {
        this.moviesList = movies;
      }
    });
  }

  navigate(id: string) {
    this.router.navigate(['movie', id]);
  }

  search(term: string) {
    this.ngRedux.dispatch({ type: SET_SEARCH_TERM, value: term });
  }

  filterByGenre(movieGenre: GenreType) {
    this.ngRedux.dispatch({ type: SET_SEARCH_FILTER, value: movieGenre });
  }

  emptySearch() {
    this.ngRedux.dispatch({ type: SET_SEARCH_TERM, value: '' });
  }

  resetFilter() {
    this.ngRedux.dispatch({ type: SET_SEARCH_FILTER, value: '' });
  }
}