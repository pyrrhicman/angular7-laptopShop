import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { LaptopComponent } from './laptop-list/laptop/laptop.component';
import { LaptopAdderComponent } from './laptop-adder/laptop-adder.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LaptopListComponent,
    MyHeaderComponent,
    LaptopComponent,
    LaptopAdderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
