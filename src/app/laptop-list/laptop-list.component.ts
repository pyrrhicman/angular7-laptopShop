import {Component, Input, OnInit, OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit , OnChanges{


  lapArray = ['lap1', 'lap2', 'lap3'];
  @Input() inputLap: string;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(inputLap: SimpleChange['currentValue']) {
    console.log('ngOnChange triiged');

    console.log(inputLap);
    if (inputLap !== '') {
      this.lapArray.push(inputLap);
    }
    // if () {
    //   this.lapArray.push(this.inputLap);
    //   console.log('Hello From List it was success' );
    //   this.inputLap = '';
    //
    // }

  }


  // textEntered(event: Event) {
  // this.mytext = (event.target as HTMLInputElement).value;
  //
  // }


}
