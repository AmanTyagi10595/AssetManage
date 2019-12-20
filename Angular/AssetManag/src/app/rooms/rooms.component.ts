import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthServiceService } from "../auth-service.service";

@Component({
  selector: "app-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.css"]
})
export class RoomsComponent implements OnInit {
  roomID;
  assets: any;
  indexStart = 1;
  constructor(
    private route: ActivatedRoute,
    private service: AuthServiceService
  ) {}

  ngOnInit() {
    this.roomID = this.route.snapshot.paramMap.get("id");
    this.assetsOfRoom(this.roomID);
  }

  assetsOfRoom(roomId) {
    this.service.getAssets(roomId).subscribe(result => {
      this.assets = result["msg"];
      console.log("room component.ts2", this.assets);
    });
  }
}
