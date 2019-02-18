import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { LaptopComponent } from './laptop-list/laptop/laptop.component';
import { LaptopAdderComponent } from './laptop-adder/laptop-adder.component';
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
