import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  @Input() textContent: string = "Default Value";
  @Output() textContentChange = new EventEmitter<string>();

  styleObject = {
    "font-size": "32px",
    "visible": true,
    "color": "white",
    "background": "dodgerblue",
    "text-align": "center",
    "height.px": 100,
    "padding.px": 20 
  };

  constructor() { }

  ngOnInit() {
  }

  updateStyle(propertyName, value) {
    this.styleObject[propertyName] = value;
  }

}