import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myReactiveForm:FormGroup
genders = [
  {
    id:1,
    genderType: 'Male'
  },
  {
    id:2,
    genderType: 'Female'
  }
]
  constructor() { }

  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male'),
      'skills': new FormArray([
        new FormControl(null, Validators.required)
      ])

    });
  }

  onSubmit(){
console.log(this.myReactiveForm);

  }

  onAddSkills(){
    const control = new FormControl (null, Validators.required);
   (<FormArray> this.myReactiveForm.get('skills')).push(control)
  }
}