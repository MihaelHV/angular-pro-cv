import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:3000/services';

@Injectable({
  providedIn: 'root',
})

export class ServiceService {
  constructor(private http: HttpClient) {}

  getServices(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl);
  }

  getService(id: number): Observable<any> {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }

  addService(service: any) {
    return this.http.post(baseUrl, service);
  }

  updateService(id: any, service: any) {
    return this.http.put(`${baseUrl}/${id}`, service);
  }

  deleteService(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}