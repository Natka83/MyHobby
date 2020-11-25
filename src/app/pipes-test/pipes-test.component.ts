import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-test',
  templateUrl: './pipes-test.component.html',
  styleUrls: ['./pipes-test.component.css']
})
export class PipesTestComponent implements OnInit {

  message: string;
  pi:number=3.14156;
  dateFromString: string = "Tue Nov 24 2020 18:54:58 GMT+0200";

  dateFromObject: Date = new Date(2020, 10, 24);

  dateFromNumber: number = 1606236898844;
  constructor() { }

  ngOnInit(): void {
    this.message="Angular is one of the most popular front-end frame."
  }

}
