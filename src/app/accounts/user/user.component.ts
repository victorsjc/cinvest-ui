
import {first, filter, debounceTime, distinctUntilChanged, map, merge} from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../_models';
import { UserService } from '../../_services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder : FormBuilder,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
     });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    let user = new User();
    user.name = this.f.name.value;
    user.username = this.f.username.value;
    user.email = this.f.email.value;
    user.password = this.f.password.value;

    this.userService.registerUser(user).pipe(first())
    .subscribe(
        data => {
            console.log(data);
            this.router.navigate(['/accounts']);
        },
        error => {
            console.log(error);
        });
}

onCancel(){
  this.router.navigate(['/accounts']);
}

}
