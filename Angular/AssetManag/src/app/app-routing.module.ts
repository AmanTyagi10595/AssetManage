import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BuildingsComponent } from "./buildings/buildings.component";
import { RoomsComponent } from "./rooms/rooms.component";

const routes: Routes = [
  { path: "", component: DashboardComponent, pathMatch: "full" },
  {
    path: "building/:id",
    loadChildren: "./buildings/buildings.module#BuildingsModule"
  },
  {
    path: "roomDetail/:id",
    loadChildren: "./rooms/rooms.module#RoomsModule"
  },
  // { path: "roomDetail/:id", component: RoomsComponent },
  {
    path: "assetsDetail",
    loadChildren: "./assets-detail/assets-detail.module#AssetsDetailModule"
  },
  { path: "**", component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
