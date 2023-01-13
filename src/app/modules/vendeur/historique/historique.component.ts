import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss'],
})
export class HistoriqueComponent implements OnInit {

  constructor() { }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    pagination : {
      el: '.swiper-pagination',
      clickable: true
    }
  };

  ngOnInit() {}

}
