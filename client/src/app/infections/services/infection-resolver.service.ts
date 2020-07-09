import {Injectable} from '@angular/core';
import {InfectionsService} from './infections.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {IInfection} from '../../common/model';

@Injectable({
  providedIn: 'root'
})
export class InfectionResolverService {
  constructor(private infectionsService: InfectionsService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IInfection> | Observable<never> {
    let id = +route.paramMap.get('id');
    let infection = this.infectionsService.getInfection(id);
    return of(infection);
  }
}
