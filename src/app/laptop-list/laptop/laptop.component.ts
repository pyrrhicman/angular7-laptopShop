import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  @Input() laptopName: string;
  @Input() myIndex: string;
  constructor() { }

  ngOnInit() {
  }

}
