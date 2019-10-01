import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expression-examples',
  templateUrl: './expression-examples.component.html',
  styleUrls: ['./expression-examples.component.css']
})
export class ExpressionExamplesComponent implements OnInit {

  codeblock1 = `{{pageTitle | uppercase}}`;
  codeblock2 = `{{pageSubtitle}}`;
  codeblock3 = `{{customer.firstName + ' ' + customer.lastName}}`;
  codeblock4 = `[textContent]="customer.firstName + ' ' + customer.lastName"`;
  codeblock5 = `[value]="getCustomerAge()"`;

  customer = {
    firstName: "Edward",
    lastName: "Elric",
    profession: "Full Metal Alchemist",
    age: 15
  }

  customerTwo = {
    firstName: "Alphonse",
    lastName: "Elric",
    profession: "Metal",
    age: 14
  }

  pageTitle = "Customers";
  pageSubtitle = "Customer Information Screen";

  constructor() { }

  ngOnInit() {
  }

  getCustomerAge() {
    return this.customer.age;
  }

  updateCustomer() {
    this.customerTwo.age += 1;
  }

}