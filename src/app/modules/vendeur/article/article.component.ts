import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  constructor() { }

  count = 1;

  submitting= false
  increment() {
    this.count++;
    this.submitting= true
  }

  decrement() {
    this.count--;
    if(this.count == 1){
      this.submitting= false
    }else if(this.count >1){
      this.submitting= true
    }
  }
  
  ngOnInit() {}

}
