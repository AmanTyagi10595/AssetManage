import { DashBoardModal } from "./dashboard/dashboard.modal";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    DashBoardModal
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
