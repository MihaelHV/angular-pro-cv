import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:3000/advisories';

@Injectable({
  providedIn: 'root',
})

export class AdvisoryService {
  constructor(private http: HttpClient) {}

  getAdvisories(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl);
  }

  getAdvisory(id: number): Observable<any> {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }

  addAdvisory(advisory: any) {
    return this.http.post(baseUrl, advisory);
  }

  updateAdvisory(id: any, advisory: any) {
    return this.http.put(`${baseUrl}/${id}`, advisory);
  }

  deleteAdvisory(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}