import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideBarComponent} from '../components/side-bar/side-bar.component';
import {TopBarComponent} from '../components/top-bar/top-bar.component';
import {VirtualScrollerModule} from 'ngx-virtual-scroller';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [SideBarComponent, TopBarComponent],
  imports: [
    CommonModule,
    VirtualScrollerModule,
    RouterModule
  ],
  exports: [SideBarComponent, TopBarComponent]
})
export class SharedModule {
}
