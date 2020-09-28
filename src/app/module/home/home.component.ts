import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemsPerSlide = 3;
  itemsPerSlideBanner = 1;
  singleSlideOffset = false;
  noWrap = false;
  selectedSrc:any='';
  slidesChangeMessage:any = '';
  showMovieScreen:boolean=false;
  activeSlideIndex = 0;
  slides = [
    {image: 'assets/img/slider.png'},
    {image: 'assets/img/slider2.png'},
    {image: 'assets/img/slider3.png'},
    {image: 'assets/img/slider.png'},
    {image: 'assets/img/slider2.png'},
    {image: 'assets/img/slider3.png'},
    {image: 'assets/img/slider.png'},
    {image: 'assets/img/slider2.png'},
    {image: 'assets/img/slider3.png'}
  ];
 
  onSlideRangeChange(indexes: number[]): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }
  latestMovieList:any=[];
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.latestMovieList=[{"src":"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"},
    {"src":"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"},
    {"src":"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"},
    {"src":"https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"}]
  }

  showMovie(data){
    this.selectedSrc="http://static.videogular.com/assets/videos/videogular.mp4";
    this.showMovieScreen=true;
  }

  cancel(event){
if(event=='false'){
 this.showMovieScreen=false;
  }
}

}
