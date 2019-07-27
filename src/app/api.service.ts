import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {}

  async ping(): Promise<any> {
    const client = await this.authService.getAuth0Client();
    const token = await client.getTokenSilently();

    return this.httpClient
      .get(environment.resourceServer.externalPingUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .toPromise();
  }
}
