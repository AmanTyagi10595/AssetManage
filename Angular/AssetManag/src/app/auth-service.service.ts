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

  signUp(data) {
    return this.http.post(
      `http://localhost:4000/common/signup`,
      data,
      httpOptions
    );
  }

  login(data) {
    return this.http.post(
      `http://localhost:4000/common/login`,
      data,
      httpOptions
    );
  }
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
      `htd by Access-Control-Allow-Mettp://localhost:4000/building/add`,
      data,
      httpOptions
    );
  }
  deleteBuilding(buildingId) {
    return this.http.delete(
      `http://localhost:4000/building/delete/${buildingId}`
    );
  }
}
