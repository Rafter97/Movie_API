import { Component } from '@angular/core';
import { OmdbApiService } from './omdb-api.service';
import { IOMDBResponse } from './omdbresponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OmdbApiService],
})
export class AppComponent {
  title = 'Api-App';

  movieData:IOMDBResponse;
  errorMessage:any;

  imageHeight=300;

  constructor(private _OmdbService: OmdbApiService){

  }

  getMovieDetails(movieName: string):boolean{
    this._OmdbService.getMovieData(movieName).subscribe(movieData =>{
      this.movieData = movieData;
      console.log('getMovieDetails: ' + this.movieData);
    },
    error => this.errorMessage = <any>error);
    return false;
  }

}
