import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  inputs: ['parentData']
})
export class NavigationComponent implements OnInit {
  public parentData:{};
  public teamIds:{};
  constructor() { 
    
  }

  ngOnInit() {
    
  }




}
