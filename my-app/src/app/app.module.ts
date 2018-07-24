import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { OmdbComponent } from './components/omdb/omdb.component';

import { Routing } from './app.routing';

import { OmdbService } from './services/omdb.service.client';

@NgModule({
  declarations: [
    AppComponent,
    OmdbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [OmdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
