import {Injectable} from '@angular/core';
import {InfectionsModule} from '../modules/infections.module';
import {Observable} from 'rxjs';
import {IInfection, IUser} from '../../common/model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: InfectionsModule
})
export class InfectionsService {

  constructor(private httpClient: HttpClient) {
  }


  public getUserDetails(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`api/user/${id}`);
  }

  public getUserInfections(id: number): Observable<IInfection[]> {
    return this.httpClient.get<IInfection[]>(`api/user/${id}/infections`);
  }
}
