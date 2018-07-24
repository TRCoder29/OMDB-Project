import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';


import {OmdbComponent} from "./components/omdb/omdb.component";


const APP_ROUTES : Routes = [
  { path : '', component: OmdbComponent},
  { path : 'omdb' , component: OmdbComponent},
]; 
// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
