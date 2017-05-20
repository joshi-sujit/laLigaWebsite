import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
	inputs: ['parentData']
})
export class FooterComponent implements OnInit {
	public parentData:{};
	constructor() { }

	ngOnInit() {
	}

}
