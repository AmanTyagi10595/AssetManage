import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSliderModule } from "@angular/material/slider";
import { FormBuilder, Validators, FormArray, FormGroup } from "@angular/forms";
import { AuthServiceService } from "../auth-service.service";
@Component({
  selector: "dashboard-modal",
  templateUrl: "./addBuilding.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashBoardModal {
  profileForm: FormGroup;
  ngOnInit() {
    this.profileForm = this.fb.group({
      name: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      noOfRooms: this.fb.array([]),
      noOfAssets: this.fb.array([this.fb.control("")])
    });
  }
  constructor(private fb: FormBuilder, private service: AuthServiceService) {}
  // @Input("dialog") dialog;
  // @Output("toggle") toggle = new EventEmitter(null);
  // onOverlayClicked(e) {
  //   e.stopPropagation();
  //   this.dialog = false;
  //   this.toggle.emit(this.dialog);
  // }
  // dialogClicked(e) {
  //   e.stopPropagation();
  //   return false
  // }
  onSubmit() {
    console.log("form data", this.profileForm.value);
    this.service.addBuilding(this.profileForm.value).subscribe(d => {
      console.log("result from back endianness", d);
    });
  }
  addRooms() {
    // this.noOfRooms.push(this.fb.control(""));
    const noRooms = this.profileForm.controls.noOfRooms as FormArray;
    noRooms.push(
      this.fb.group({
        noOfRooms: ""
      })
    );
  }
  get noOfAssets() {
    return this.profileForm.get("noOfAssets") as FormArray;
  }
  addnoOfAssets() {
    this.noOfAssets.push(this.fb.control(""));
  }
}
