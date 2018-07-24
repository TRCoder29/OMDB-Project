import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()

export class OmdbService {

	constructor(private http: Http) { }

	// Source of Data to be Mined/Accessed
	searchMovie(title: string) {
		const url = 'http://www.omdbapi.com/?apikey=f064edf4&s=' + title;
		return this.http.get(url).pipe(map(
			(response: Response) => {
				return response.json();
			}
		))
	}
}