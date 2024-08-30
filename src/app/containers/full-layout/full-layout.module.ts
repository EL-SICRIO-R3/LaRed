import { NgModule } from "@angular/core";
import { FullLayoutComponent } from "./full-layout.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { routes } from "../../app.routes";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { SharedComponentsModule } from "../../shared-components/shared-components.module";




const APP_COMPONENTS = [
    AppHeaderComponent
]

@NgModule({
    declarations: [
        FullLayoutComponent
        
    ],
    imports: [
        ...APP_COMPONENTS,
        SharedComponentsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [FullLayoutComponent] 
  })
  export class FullLayoutModule{}