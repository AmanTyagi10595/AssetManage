import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../auth-service.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  buildings: any;
  indexStart = 1;
  constructor(private service: AuthServiceService) {}

  ngOnInit() {
    this.getBuildings();
  }
  getBuildings() {
    this.service.getBuildings().subscribe(data => {
      this.buildings = data;
      console.log(this.buildings);
    });
  }
}
