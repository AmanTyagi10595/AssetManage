import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "./../auth-service.service";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: String;

  constructor(
    private fb: FormBuilder,
    private service: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  onSubmit() {
    //  userInfo={
    //    email:
    //  }
    console.log("Hey , here I am", this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe(
      result => {
        console.log("result from login api", result);
        this.message = result["msg"];
        setTimeout(() => {
          this.message = null;
          this.router.navigate(["/dashboard"]);
        }, 500);
      },
      error => {
        console.log("result from login api", error.error);
        this.message = error["error"]["msg"];
        setTimeout(() => {
          this.message = null;
        }, 1500);
      }
    );
  }
}
