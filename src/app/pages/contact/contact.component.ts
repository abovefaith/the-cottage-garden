import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  submitForm!: FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
     // validations
     this.submitForm = this.formBuilder.group({
      childsName:['',Validators.required],
      childsDOB:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      message:['',Validators.required],
     })
  }

  onSubmit() {
    this.submitted = true

    if (this.submitForm.invalid) {
        return
    }
    alert("Success")
    }
  }




