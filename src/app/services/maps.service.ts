import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MapService {

  apiUrl = environment.API_MAPS;
  key = environment.KEY_MAPS;

  constructor(private http: HttpClient) { }

  // Retorna Todos os Grupos e suas classes ativas
  getLatLong(): Observable<any> {
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?address=65070280%Sao%20Luis&key=AIzaSyAofSgPCKs-NUy2_AVLw-opQiPm75wR030`);
    // .pipe(  map(({ location }) => location));
  }
}
