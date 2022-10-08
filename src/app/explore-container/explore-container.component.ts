import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  ionicForm: FormGroup;
  isSubmitted = false;
  isOpen = false
  constructor(public formBuilder: FormBuilder) { }
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      pan: ['', [ Validators.minLength(10), Validators.maxLength(10), ]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      panCard: ['', [Validators.minLength(5), Validators.maxLength(30), ]],
      mobile: ['', [Validators.minLength(10), Validators.maxLength(10),Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      return false;
    } else {
      console.log(this.ionicForm.value)
    }
    this.isOpen = false
  }

  close(){
    this.isOpen = false
  }

  open(){
    this.isOpen = true
  }
}


