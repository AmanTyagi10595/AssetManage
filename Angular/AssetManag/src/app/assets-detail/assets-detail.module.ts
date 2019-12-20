import { AssetsDetailComponent } from "./assets-detail.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: "",
    component: AssetsDetailComponent
  }
];
@NgModule({
  declarations: [AssetsDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AssetsDetailModule {}
