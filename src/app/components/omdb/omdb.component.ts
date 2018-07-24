import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { OmdbService } from '../../services/omdb.service.client'

@Component({
  selector: 'app-omdb',
  templateUrl: './omdb.component.html',
  styleUrls: ['./omdb.component.css']
})
export class OmdbComponent implements OnInit {

  @ViewChild('f') searchForm: NgForm;

  title: string;
  movies: any[];

  constructor(private omdbService: OmdbService) { }

  ngOnInit() {
  }

  search(){
    // Get user input
  	this.title = this.searchForm.value.title;
    // Calling searchMovie in omdb client service;
  	this.omdbService.searchMovie(this.title).subscribe(
		(data: any) => {
			this.movies = data.Search;
		}
  	)
  }

}
