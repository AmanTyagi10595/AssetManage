import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../auth-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-buildings",
  templateUrl: "./buildings.component.html",
  styleUrls: ["./buildings.component.css"]
})
export class BuildingsComponent implements OnInit {
  id;
  i = 0;
  rooms: any;
  buildingInfo: any;
  constructor(
    private service: AuthServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.service.getSingleBuilding(this.id).subscribe(data => {
      this.buildingInfo = data["msg"];
    });
    this.roomsOfOneBuilding(this.id);
  }
  roomsOfOneBuilding(id) {
    this.service.getRooms(id).subscribe(data => {
      this.rooms = data["msg"];
      // console.log("rooms are ", this.rooms);
      console.log("Building Info", this.buildingInfo);
    });
  }
}
