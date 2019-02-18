import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {logger} from 'codelyzer/util/logger';
import {joinTestLogs} from 'protractor/built/util';

@Component({
  selector: 'app-laptop-adder',
  templateUrl: './laptop-adder.component.html',
  styleUrls: ['./laptop-adder.component.css']
})
export class LaptopAdderComponent implements OnInit {
  laptopNameInput: string;
  @Output() buttonEmitter = new EventEmitter<{stringShit: string}>();

  constructor() { }

  ngOnInit() {
  }
  butClicked() {
    this.buttonEmitter.emit({stringShit : this.laptopNameInput});
    this.laptopNameInput = '';
    setTimeout(() => {
       this.buttonEmitter.emit({stringShit : this.laptopNameInput});

    }, 50);
    console.log('ButtonCLiked');

  }
}
