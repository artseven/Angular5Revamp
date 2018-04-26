import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-reactive-form',
  templateUrl: './demo-reactive-form.component.html',
  styleUrls: ['./demo-reactive-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DemoReactiveFormComponent implements OnInit {

  nameForm: FormGroup
  constructor() { }

  ngOnInit() {
    this.nameForm = new FormGroup({
      firstname:  new FormControl('', {
        validators: Validators.required,
        updateOn: 'change'
      }),
      lastname: new FormControl('', {
        validators: Validators.required,
        updateOn: 'change'
      })

    });

  }

}
