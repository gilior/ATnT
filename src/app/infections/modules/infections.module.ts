import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../common/modules/shared.module';
import {HostComponent} from '../components/host/host.component';
import {RouterModule, Routes} from '@angular/router';
import {InfectionDetailsComponent} from '../components/infection-details/infection-details.component';
import {HttpClientModule} from '@angular/common/http';
// import {AppRoutingModule} from '../../main/modules/app-routing.module';

const routes: Routes = [
  {path: 'host', component: HostComponent,children:[
      {
        path:':id',
        component:InfectionDetailsComponent
      }
    ]},
  {path: '', redirectTo: 'host', pathMatch: 'full'}
];

@NgModule({
  declarations: [HostComponent,InfectionDetailsComponent],
  imports: [
    CommonModule,
   HttpClientModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class InfectionsModule {
}
