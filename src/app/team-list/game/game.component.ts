import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  inputs: [ 'data' ]
})
export class GameComponent implements OnInit {
  private data:{};
  constructor() { }

  ngOnInit() {
  }

}
