import { NgModule } from "@angular/core";
import { FullLayoutComponent } from "./full-layout.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { routes } from "../../app.routes";

@NgModule({
    declarations: [FullLayoutComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [FullLayoutComponent] 
  })
  export class FullLayoutModule{}