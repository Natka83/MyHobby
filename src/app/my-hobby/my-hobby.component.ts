import { Component, OnInit } from '@angular/core';
import { Hobby } from './hobby';

@Component({
  selector: 'app-my-hobby',
  templateUrl: './my-hobby.component.html',
  styleUrls: ['./my-hobby.component.css']
})
export class MyHobbyComponent implements OnInit {
  myHobby: Hobby;
  constructor() { }

  ngOnInit(): void {
    this.myHobby = new Hobby();
    this.myHobby.title ="My hobby is reading.";
    this.myHobby.discription ="It has been a great pleasure for me since my childhood. The world of literature is fascinating and infinite."
  }

}
