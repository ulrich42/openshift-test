import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'test1',
  styleUrls: ['./test1.component.css'],
  templateUrl: './test1.component.html'
})
export class Test1Component {
  testForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.testForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      content: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  submitForm(): void {
    console.log(this.testForm);
  }
}
