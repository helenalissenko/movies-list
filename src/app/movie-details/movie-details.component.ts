import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movies } from '../../data/movie.mock-data';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.movie = movies.find(m => m.id.toString() === id);
    });
  }

  navigate(id: string) {
    this.router.navigate(['movies']);
  }
}