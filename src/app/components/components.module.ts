import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './main-container/main-container.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainContainerComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
