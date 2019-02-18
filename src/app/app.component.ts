import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lapArray = '';
  title = 'angular7-laptopShop';

  onSomeTextEntered(myData: {stringShit: string}) {
    this.lapArray = myData.stringShit;
    console.log('EmitterTrigged Data is :' + myData.stringShit + ':end');

  }


}

