import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: "root"
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}
  getBuildings() {
    return this.http.get("http://localhost:4000/building");
  }

  getSingleBuilding(buildngId) {
    return this.http.get(`http://localhost:4000/building/${buildngId}`);
  }

  getRooms(buildingId) {
    return this.http.get(`http://localhost:4000/room/${buildingId}`);
  }

  getAssets(roomID) {
    return this.http.get(`http://localhost:4000/asset/assetsOfRoom/${roomID}`);
  }
  addBuilding(data) {
    return this.http.post(
      `http://localhost:4000/building/add`,
      data,
      httpOptions
    );
  }
}
