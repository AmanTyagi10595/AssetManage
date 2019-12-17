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
  constructor(
    private route: ActivatedRoute,
    private service: AuthServiceService
  ) {}

  ngOnInit() {
    this.roomID = this.route.snapshot.paramMap.get("id");
    this.assetsOfRoom(this.roomID);
  }

  assetsOfRoom(roomId) {
    this.service.getAssets.subscribe(data => {
      console.log(data, "guihihihuuhh");
    });
  }
}
