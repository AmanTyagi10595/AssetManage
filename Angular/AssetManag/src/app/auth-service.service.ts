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

  getRooms(buildingId) {}
}
