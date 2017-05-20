import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//Primera Division 2016/17 - 436

@Injectable()
export class TeamService {
	private _apiKey = "7bf8635f96754aecbfc1a3d057f7a3e6";
	private requestOptions = new RequestOptions({ headers: new Headers({ 'X-Auth-Token': '7bf8635f96754aecbfc1a3d057f7a3e6' }) });
	private fixtureData;
	private cData;
	constructor(private _http: Http) {
	}

	getTeams() {
		let url = "http://api.football-data.org/v1/competitions/436/teams";
		return this._http.get(url, this.requestOptions)
			.map((response: Response) => response.json())
			.catch(this._errorHandler);
	}

	getLeagueTable(){
		let url = "http://api.football-data.org/v1/competitions/436/leagueTable";
		return this._http.get(url, this.requestOptions)
			.map((response: Response) => response.json())
			.catch(this._errorHandler);
	}

	getUpcomingFixture(){
		let url = "http://api.football-data.org/v1/competitions/436/fixtures?timeFrame=n20";
		return this._http.get(url, this.requestOptions)
			.map((response: Response) => response.json())
			.catch(this._errorHandler);
	}

	getRecentResults(){
		let url = "http://api.football-data.org/v1/competitions/436/fixtures?timeFrame=p7";
		return this._http.get(url, this.requestOptions)
			.map((response: Response) => response.json())
			.catch(this._errorHandler);
	}

	getResults(){
		let url = "http://api.football-data.org/v1/competitions/436/fixtures";
		return this._http.get(url, this.requestOptions)
			.map((response: Response) => response.json().fixtures)
			.catch(this._errorHandler);
	}

	getTeam(id:String){
		let url = "http://api.football-data.org/v1/teams/"+id;
		return this._http.get(url, this.requestOptions)
			.map((response: Response) => response.json())
			.catch(this._errorHandler);
	}

	getTeamFixture(id:String){
		let url = "http://api.football-data.org/v1/teams/"+id+"/fixtures?timeFrameStart=2017-01-01&timeFrameEnd=2017-12-30"
		this.fixtureData = this._http.get(url, this.requestOptions)
			.map((response: Response) => response.json().fixtures)
			.catch(this._errorHandler);
		return this.fixtureData;
	}

	getTeamPerformance(id:String){
		for(let a of this.fixtureData){
			if(a.status == "TIMED"){
				this.cData.push(a);
			}
		}
		return this.cData;
	}


	getTeamPlayers(id:String){
		let url = "http://api.football-data.org/v1/teams/"+id+"/players";
		return this._http.get(url, this.requestOptions)
			.map((response: Response) => response.json())
			.catch(this._errorHandler);
	}

	_errorHandler(error: Response) {
		console.error(error);
		return Observable.throw(error || "Server Error");
	}



}
