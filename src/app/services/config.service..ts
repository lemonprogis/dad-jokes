import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IConfig} from '../store/state/config.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = `/assets/config.json`;

  constructor(private http: HttpClient) { }

  getConfig(): Observable<IConfig> {
    return this.http.get<IConfig>(this.configUrl);
  }
}
