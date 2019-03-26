import { Component, OnInit } from '@angular/core';
import {Course } from '../course-details';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-float-course',
  templateUrl: './float-course.component.html',
  styleUrls: ['./float-course.component.css']
})
export class FloatCourseComponent{

  constructor() { }

  ngOnInit() {
  }
  course : Course[]=[
    {value: 'lab', viewValue: 'Lab'},
    {value: 'theory', viewValue: 'Theory'},
  ];
  credits : Course[]=[
    {value: '2', viewValue: 'Two'},
    {value: '3', viewValue: 'Three'},
    {value: '4', viewValue: 'Four'},
  ];
  profileForm = new FormGroup({
    coursename: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z||a-z]$/),
    ]),
    password: new FormControl('', [Validators.required]),
  });
}
