import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lyra-webpage-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  @Input() heading : string;
  @Input() list : string;
  constructor() { }

  ngOnInit() {
  }

}
