import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignUpComponent } from "./sign-up.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignupRouting } from "./signup.routes.module";

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, SignupRouting, FormsModule, ReactiveFormsModule]
})
export class SignUpModule {}
