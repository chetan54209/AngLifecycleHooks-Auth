import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
myReactiveForm:FormGroup
notAllowedNames = ['chetan']
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
      'username': new FormControl(null, [Validators.required, this.NaName.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male'),
      'skills': new FormArray([
        new FormControl(null, Validators.required)
      ])

    });
    
    // Some important Methos for async forms

// this.myReactiveForm.valueChanges.subscribe(
//       (value) => console.log(value))

//   this.myReactiveForm.statusChanges.subscribe(
//     (status) => console.log(status))

// setTimeout(()=>{
//   this.myReactiveForm.setValue({
//     'username': 'csl',
//     'email': 'abc@abc.com',
//     'course': 'Html',
//     'gender': 'Male',
//     'skills': [
//       'Photoshop'
//     ]
//   })
// }, 5000);

// this.myReactiveForm.patchValue({
//   'email': 'abc@abc.com',
//  })


  }

  onSubmit(){
console.log(this.myReactiveForm);
this.myReactiveForm.reset({
        'username': '',
        'email': '',
        'course': 'Angular',
        'gender': 'Male',
        'skills': [
          ''
        ]
});

  }

  // used for adding the dynamic skill fields from user

  onAddSkills(){
    const control = new FormControl (null, Validators.required);
   (<FormArray> this.myReactiveForm.get('skills')).push(control)
  }

  // custom validators
  // suppose i want that in username fields no on ecan use my username
NaName(control:FormControl){
if(this.notAllowedNames.indexOf(control.value)!==-1){
  return{'nameIsNotAllowed':true}
     }
return null; 
}

}
