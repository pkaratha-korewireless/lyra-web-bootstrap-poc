import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lyra-webpage-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  pages  = new Array(10);
  constructor() { }

  ngOnInit() {
  }
  counter(i: number) {
    console.log("i",i)
    return new Array(i);
}
}
