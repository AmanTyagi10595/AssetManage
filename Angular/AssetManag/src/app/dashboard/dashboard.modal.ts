import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSliderModule } from "@angular/material/slider";
import { FormBuilder } from "@angular/forms";
@Component({
  selector: "dashboard-modal",
  templateUrl: "./addBuilding.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashBoardModal {
  profileForm = this.fb.group({
    street: [""],
    city: [""],
    state: [""],
    noOfRooms: [""],
    noOfAssets: [""]
  });
  constructor(private fb: FormBuilder) {}
  // @Input("dialog") dialog;
  // @Output("toggle") toggle = new EventEmitter(null);
  // onOverlayClicked(e) {
  //   e.stopPropagation();
  //   this.dialog = false;
  //   this.toggle.emit(this.dialog);
  // }
  // dialogClicked(e) {
  //   e.stopPropagation();
  //   return false;
  // }
}
