import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { countries } from 'src/app/sharedfolders/components/store/country-data-store.model';

import { ThemePalette } from '@angular/material/core';


interface FileNames {
  [key: string]: string;
}

@Component({
  selector: 'app-enrollpage',
  templateUrl: './enrollpage.component.html',
  styleUrls: ['./enrollpage.component.scss']
})
export class EnrollpageComponent implements OnInit {


  colorControl = 'warm' as ThemePalette;


  isLinear = false;
  personalDetailsFormGroup!: UntypedFormGroup;
  userDetailsFormGroup!: UntypedFormGroup;

  passVisible = false;

  formData = new FormData();
  fileNames: FileNames = {}







  public countries:any = countries


  submitForm!: FormGroup;

  submitted = false;
  Heard: any = ['Word of Mouth', 'Friend', 'Other School', 'Website', 'Other'];
  HouseholdsMail: any = ['Parent 1', 'Parent 2'];
  Weaned: any = ['Yes', 'No'];
  Toilet: any = ['Yes', 'No'];



  constructor(private formBuilder: FormBuilder, private fb: UntypedFormBuilder) {}

  ngOnInit(){

    this.personalDetailsFormGroup = this.getPersonalDetailsForm();
    this.userDetailsFormGroup = this.getUserDetailsForm();



    // validations

    this.submitForm = this.formBuilder.group({
      fName1:['',Validators.required],
      fName2:['',Validators.required],
      fName3:['',Validators.required],

      lName1:['',Validators.required],
      lName2:['',Validators.required],
      lName3:['',Validators.required],

      gender:['',Validators.required],

      childDOB:['',Validators.required],
      childPDE:['',Validators.required],

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

      cellPhone1:['',Validators.required],
      cellPhone2:['',Validators.required],

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

  changeHeard(e: any) {
    this.heard?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  changeMail(e: any) {
    this.householdsMail?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  changeWeaned(e: any) {
    this.weaned?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  changeToilet(e: any) {
    this.weaned?.setValue(e.target.value, {
      onlySelf: true,
    });
  }



  // Access formcontrols getter
  get heard() {
    return this.submitForm.get('heard');
  }

  get householdsMail() {
    return this.submitForm.get('householdsMail');
  }

  get weaned() {
    return this.submitForm.get('weaned');
  }

  get toilet() {
    return this.submitForm.get('weaned');
  }





  onSubmit() {
    this.submitted = true

    if (this.submitForm.invalid) {
        return
    }
    alert("Success")
    }






    getPersonalDetailsForm() {
      return this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        idNumber: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        gender: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    getUserDetailsForm() {
      return this.fb.group({
        driver: [false, Validators.required],
        client: [false, Validators.required],
        licenseNumber: ['']
      });
    }

    togglePass() {
      this.passVisible = !this.passVisible;
    }

    handleFile(e: any, fileName: string) {
      const file: File = e.target.files[0];

      this.formData.set(fileName, file);
      this.fileNames[fileName] = file.name;
    }

    removeFile(fileName: string) {
      this.formData.delete(fileName);
      delete this.fileNames[fileName];
    }







  }



