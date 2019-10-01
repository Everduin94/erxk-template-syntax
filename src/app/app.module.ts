import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderGeneratorComponent } from './header-generator/header-generator.component';
import { ExpressionExamplesComponent } from './expression-examples/expression-examples.component';
import { StatementExamplesComponent } from './statement-examples/statement-examples.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderGeneratorComponent, ExpressionExamplesComponent, StatementExamplesComponent, DataBindingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
