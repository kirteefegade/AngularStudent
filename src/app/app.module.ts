import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentService } from './service/studentService';
import { StudentDetailComponent } from './student/studentDetail/studdetail.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentFormComponent } from './student/studentForm/studform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,StudentDetailComponent,StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
