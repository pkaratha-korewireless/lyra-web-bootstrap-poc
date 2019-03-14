import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lyra-webpage-filter-contents',
  templateUrl: './filter-contents.component.html',
  styleUrls: ['./filter-contents.component.css']
})
export class FilterContentsComponent implements OnInit {
  @Input() heading: string;
  @Input() list: string;
  constructor() {}

  ngOnInit() {}
}
