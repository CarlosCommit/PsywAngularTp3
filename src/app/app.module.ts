import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { GestionModule } from './gestion/gestion.module';


@NgModule({
  declarations: [
    AppComponent,
    Punto1Component,
    HeaderComponent,
    Punto2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GestionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
