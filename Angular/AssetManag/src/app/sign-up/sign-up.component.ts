import { AuthServiceService } from "./../auth-service.service";
import { NgModule } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormBuilder, Validators, FormArray, FormGroup } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  message: String;
  constructor(private fb: FormBuilder, private service: AuthServiceService) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ["", Validators.required],
      psw: ["", Validators.required]
    });
  }
  onSubmit() {
    console.log("form submited", this.signupForm.value);
    this.service.signUp(this.signupForm.value).subscribe(data => {
      console.log("result from backen on user registration", data);
      this.message = data["msg"];
      setTimeout(() => {
        this.message = null;
      }, 2000);
    });
  }
}
