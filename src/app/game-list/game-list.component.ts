import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['game-list.component.css'],
  inputs : ['data','flag']
})
export class GameListComponent implements OnInit {
  private data:{};
  constructor() { }

  ngOnInit() {
  }

}
