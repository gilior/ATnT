import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../common/modules/shared.module';
import {HostComponent} from '../components/host/host.component';
import {RouterModule, Routes} from '@angular/router';
import {InfectionDetailsComponent} from '../components/infection-details/infection-details.component';
import {InfectionResolverService} from '../services/infection-resolver.service';
// import {AppRoutingModule} from '../../main/modules/app-routing.module';

const routes: Routes = [
  {
    path: 'host', component: HostComponent,
    children: [
      {
        path: ':id',
        component: InfectionDetailsComponent,
        resolve: {
          infection: InfectionResolverService
        }
      }
    ]
  },
  {path: '', redirectTo: 'host', pathMatch: 'full'}
];

@NgModule({
  declarations: [HostComponent, InfectionDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class InfectionsModule {
}
