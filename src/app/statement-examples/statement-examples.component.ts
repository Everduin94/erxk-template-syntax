import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statement-examples',
  templateUrl: './statement-examples.component.html',
  styleUrls: ['./statement-examples.component.css']
})
export class StatementExamplesComponent implements OnInit {

codeblock1 = `(change)="updateName(\$event.target.value)"`;
codeblock2 = `(change)="updateLastName(\$event.target.value); validate()"`;
codeblock3 = `(click)="updateCustomerAge()"`;

customer = {
    firstName: "Alphonse",
    lastName: "Elric",
    profession: "Metal",
    age: 14
  }

  constructor() { }

  ngOnInit() {
  }

  updateCustomerAge() {
    this.customer.age += 1;
    console.log(this.customer.age);
  }

  updateName(value) {
    this.customer.firstName = value;
    console.log(this.customer.firstName);
  }

  updateLastName(value) {
    this.customer.lastName = value;
    console.log(this.customer.lastName);
  }

  validate() {
    if (!this.customer.lastName) {
      console.log('error!')
    }
  }

}