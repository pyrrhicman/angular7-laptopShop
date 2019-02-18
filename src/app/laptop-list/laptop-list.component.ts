import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  lapArray = ['lap1', 'lap2', 'lap3'];
  bClick = false;
  constructor() { }

  ngOnInit() {
  }

  onSomeTextEntered(myData: {stringShit: string}) {
    this.lapArray.push(myData.stringShit);
    console.log('EmitterTrigged');
  }
  // textEntered(event: Event) {
  // this.mytext = (event.target as HTMLInputElement).value;
  //
  // }


}
