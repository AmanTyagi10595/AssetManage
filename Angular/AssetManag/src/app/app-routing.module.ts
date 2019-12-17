import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BuildingsComponent } from "./buildings/buildings.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { AssetsComponent } from "./assets/assets.component";

const routes: Routes = [
  { path: "", component: DashboardComponent, pathMatch: "full" },
  { path: "buildingDetail/:id", component: BuildingsComponent },
  { path: "roomDetail/:id", component: RoomsComponent },
  { path: "assetsDetail", component: AssetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
