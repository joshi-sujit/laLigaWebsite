import { Component, OnInit, ViewChild } from '@angular/core';
import { TeamService } from '../team.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [TeamService]
})

export class ResultComponent implements OnInit {
  _data;
	errorMsg: string;
  dtTrigger: Subject<any>;
	@ViewChild(DataTableDirective)
	dtElement: DataTableDirective;
	dtOptions: DataTables.Settings = {};
  
  constructor(private _teamService: TeamService) {
    this.dtTrigger = new Subject();
    
   }

  ngOnInit() {
    this._teamService.getResults()
			.subscribe(resTeamData => { this._data = resTeamData ; this.dtTrigger.next(); }
			, resErrorData => this.errorMsg = resErrorData);
    
    this.dtOptions = {
      order : [[ 2, "asc" ]]
    };
  }
}
