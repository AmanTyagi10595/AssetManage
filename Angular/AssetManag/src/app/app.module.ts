import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BuildingsComponent } from "./buildings/buildings.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { AssetsComponent } from "./assets/assets.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuildingsComponent,
    DashboardComponent,
    RoomsComponent,
    AssetsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
