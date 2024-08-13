import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { homeCarouselData } from 'src/Data/mainCarousel';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css']
})
export class MainCarouselComponent {
  carouselData:any
  currentSlide=0
  interval:any;

  ngOnInit(){
    this.carouselData=homeCarouselData
  }
  autoPlay(){
    setInterval(()=>{
    },2000)
  }
  nextSlide(){
    this.currentSlide=(this.currentSlide+1)% this.carouselData.length;
  }
}

