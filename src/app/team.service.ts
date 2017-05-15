import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { Team } from './team-list/team.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//Primera Division 2016/17 - 436

@Injectable()
export class TeamService {
	private _apiKey = "7bf8635f96754aecbfc1a3d057f7a3e6";
	constructor(private _http: Http) {
	}


	getTeams() {
		let url = "http://api.football-data.org/v1/competitions/436/teams";
		let requestOptions = new RequestOptions({ headers: new Headers({ 'X-Auth-Token': '7bf8635f96754aecbfc1a3d057f7a3e6' }) });
		return this._http.get(url, requestOptions)
			.map((response: Response) => response.json())
			.catch(this._errorHandler);
	}

	getLeagueTable(){
		let url = "http://api.football-data.org/v1/competitions/436/leagueTable";
		let requestOptions = new RequestOptions({ headers: new Headers({ 'X-Auth-Token': '7bf8635f96754aecbfc1a3d057f7a3e6' }) });
		return this._http.get(url, requestOptions)
			.map((response: Response) => response.json())
			.catch(this._errorHandler);
	}


	
	_errorHandler(error: Response) {
		console.error(error);
		return Observable.throw(error || "Server Error");
	}



}
