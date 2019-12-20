import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "dashboard-modal",
  template: `
    <div [ngClass]="{ overlay: dialog }" (click)="onOverlayClicked($event)">
      <div [ngClass]="{ dialog: dialog }" (click)="dialogClicked($event)">
        <div>
          <h1>Hello world</h1>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./dashboard.component.css"]
})
export class DashBoardModal {
  @Input("dialog") dialog;
  @Output("toggle") toggle = new EventEmitter(null);

  onOverlayClicked(e) {
    e.stopPropagation();
    this.dialog = false;
    this.toggle.emit(this.dialog);
  }

  dialogClicked(e) {
    e.stopPropagation();
    return false;
  }
}
