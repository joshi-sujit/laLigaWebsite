import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-game',
  templateUrl: './f-game.component.html',
  styleUrls: ['./f-game.component.css'],
  inputs: [ 'data' ]
})
export class FGameComponent implements OnInit {
  private data:{};
  constructor() { 
  }

  ngOnInit() {
  }

}

