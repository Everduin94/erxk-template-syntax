import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-generator',
  templateUrl: './header-generator.component.html',
  styleUrls: ['./header-generator.component.css']
})
export class HeaderGeneratorComponent implements OnInit {

  firstName = "Edward";
  lastName = "Elric";

  cssClass = "";
  

  constructor() { }

  ngOnInit() {
  }

  generateHeader() {

  }

}