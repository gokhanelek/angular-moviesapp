import { Component } from '@angular/core';
import { Movies } from './movies.datasource';
import { Movie } from '../movie';
import { MovieService } from '../services/movie.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'movies',
    templateUrl: 'movies.component.html'
})

export class MoviesComponent {
    title = ' Movie List';

    movies = Movies;
    selectedMovie: Movie;

    constructor(private movieServices: MovieService) { }

    ngOnInit(): void {
        this.getMovies();
    }

    onSelect(movie: Movie): void {
        this.selectedMovie = movie;
    }

    getMovies(): void {
        // this.movies = this.movieServices.getMovies();

        this.movieServices.getMovies().subscribe(movies => {
            this.movies = movies;
        });
    }
}
