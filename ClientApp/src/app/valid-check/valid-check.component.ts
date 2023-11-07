import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-valid-check',
  templateUrl: './valid-check.component.html'
})
export class ValidCheckComponent {
  personalInfoForm: FormGroup;
  submitted= false;

  constructor(private fb: FormBuilder) {
    this.personalInfoForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // other form controls...
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.personalInfoForm.invalid) {
      this.personalInfoForm.markAllAsTouched();
      alert('Please fill out all the required fields.');
      return;
    }
    
    // proceed with processing the form data
  }
}
