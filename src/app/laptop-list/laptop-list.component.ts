import {Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit , OnChanges {


  lapArray = ['lap1', 'lap2', 'lap3'];
  @Input() inputLap: string;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  // textEntered(event: Event) {
  // this.mytext = (event.target as HTMLInputElement).value;
  //
  // }
}

