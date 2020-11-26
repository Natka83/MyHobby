import { Component, OnInit } from '@angular/core';
import { Hobby } from './hobby';

@Component({
  selector: 'app-my-hobby',
  templateUrl: './my-hobby.component.html',
  styleUrls: ['./my-hobby.component.css']
})
export class MyHobbyComponent implements OnInit {
  myHobby1: Hobby;
  myHobby2: Hobby;

  constructor() { }

  ngOnInit(): void {
    this.myHobby1 = new Hobby();
    this.myHobby1.title ="My hobby is reading.";
    this.myHobby1.discription ="It has been a great pleasure for me since my childhood. The world of literature is fascinating and infinite."

    this.myHobby2 = new Hobby();
    this.myHobby2.title ="My hobby is driving.";
    this.myHobby2.discription ="I love driving on our country. It's so cool to discover a cities, a road with a beautiful view, or a place that seems like a secret one."
  }

}
