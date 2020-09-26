import { Component, OnInit } from '@angular/core';
import { RestUrlService } from '../../rest-url/rest-url.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private restUrlService:RestUrlService,private http:Http) { }

  ngOnInit(): void {
  }

  getMoviesList(){
     
    return this.restUrlService.getRestUrl().getMoviesList.url;
  /*  const joParams = {
      userId: userid
    };
    this.http
    .post(
      this.restUrlService.getRestUrl().userDetails.url, joParams).subscribe(
        response => {
          var result = response.json();

        });*/
  }

}
