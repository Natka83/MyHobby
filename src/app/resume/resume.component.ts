import { Component, OnInit } from '@angular/core';
import { Resume } from  './Resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  myResume:Resume;
  constructor() { }

  ngOnInit(): void {
    this.myResume = new Resume();
    this.myResume.fio="Filatova Natalia";
    this.myResume.tel=[];
    this.myResume.tel.push("0679997792");
    this.myResume.tel.push("0679927292");
    this.myResume.email='filatovanatalia.nf@gmail.com';
    this.myResume.expierence=2;
    this.myResume.city='Krivoj Rog';
    this.myResume.photo="../../../assets/images/Avatar.jpg";
    this.myResume.skills=[];
    this.myResume.skills.push("Web-application.");
    this.myResume.skills.push("Javascript application.");
    this.myResume.skills.push("C# application.");
    this.myResume.skills.push("WinForms application.");
    this.myResume.skills.push("Microsoft Azure application.");
    this.myResume.skills.push("Object oriented programming using C++.");
    this.myResume.skills.push("Microsoft.Net application.");
    this.myResume.skills.push("MS SQL Server.");
    this.myResume.skills.push("Scripting language javascript and framework jQuery.");
  }

}
