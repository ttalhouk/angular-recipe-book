import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


import { DropdownDirective } from './dropdown.directive';


@NgModule({
  declarations: [
    DropdownDirective
  ],
  exports:[
    CommonModule,
    DropdownDirective
  ]
})
export class SharedModule { }
