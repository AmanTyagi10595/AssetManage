import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BuildingsComponent } from "./buildings/buildings.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
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
  {
    path: "common",
    loadChildren: "./sign-up/sign-up.module#SignUpModule"
  },
  { path: "**", component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
