import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';


@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    SplitterModule,
    MenubarModule,
    CommonModule,
    AvatarModule,
    AvatarGroupModule
  ]
})
export class SharedComponentsModule { }
