import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { countries } from 'src/app/sharedfolders/components/store/country-data-store.model';

@Component({
  selector: 'app-emergency-form',
  templateUrl: './emergency-form.component.html',
  styleUrls: ['./emergency-form.component.scss']
})
export class EmergencyFormComponent   implements OnInit {
  public countries:any = countries

  submitForm!: FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(){
    // validations

    this.submitForm = this.formBuilder.group({
      fName1:['',Validators.required],
      fName2:['',Validators.required],
      fName3:['',Validators.required],

      lName1:['',Validators.required],
      lName2:['',Validators.required],
      lName3:['',Validators.required],

      PFName:['',Validators.required],
      PLName:['',Validators.required],


      efName1:['',Validators.required],
      elName1:['',Validators.required],


      efName2:['',Validators.required],
      elName2:['',Validators.required],

      efName3:['',Validators.required],
      elName3:['',Validators.required],

      gender:['',Validators.required],

      childDOB:['',Validators.required],
      childPDE:['',Validators.required],
      date:['',Validators.required],

      p1Date:['',Validators.required],
      p2Date:['',Validators.required],

      country1:['',Validators.required],
      country2:['',Validators.required],
      country3:['',Validators.required],
      country4:['',Validators.required],

      city1:['',Validators.required],
      city2:['',Validators.required],
      city3:['',Validators.required],
      city4:['',Validators.required],

      state1:['',Validators.required],
      state2:['',Validators.required],
      state3:['',Validators.required],
      state4:['',Validators.required],

      zip1:['',Validators.required],
      zip2:['',Validators.required],
      zip3:['',Validators.required],
      zip4:['',Validators.required],

      ad1Line1:['',Validators.required],
      ad1Line2:['',Validators.required],
      ad1Line3:['',Validators.required],
      ad1Line4:['',Validators.required],

      ad2Line1:['',Validators.required],
      ad2Line2:['',Validators.required],


      cellPhone1:['',Validators.required],
      cellPhone2:['',Validators.required],
      cellPhone3:['',Validators.required],
      cellPhone4:['',Validators.required],
      cellPhone5:['',Validators.required],
      cellPhone6:['',Validators.required],
      cellPhone7:['',Validators.required],
      cellPhone8:['',Validators.required],
      cellPhone9:['',Validators.required],


      email1:['',[Validators.required, Validators.email]],
      email2:['',[Validators.required, Validators.email]],

      workPhone1:['',Validators.required],
      workPhone2:['',Validators.required],

      employer1:['',Validators.required],
      employer2:['',Validators.required],

      position1:['',Validators.required],
      position2:['',Validators.required],

      weaned:['',Validators.required],
      toilet:['',Validators.required],
      outside:['',Validators.required],
      watch:['',Validators.required],
      special:['',Validators.required],
      med:['',Validators.required],
      evaluations:['',Validators.required],
      allergy:['',Validators.required],
      anythingelse:['',Validators.required],
      heard:['',Validators.required],
      p1sign:['',Validators.required],
      p2sign:['',Validators.required],

      householdsMail: ['', [Validators.required]],

      lives:['',Validators.required]

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
