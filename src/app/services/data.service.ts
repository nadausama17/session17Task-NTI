import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }

  register(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/users',data);
  }

  login(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/users/login',data);
  }

  getAllUsers():Observable<any>{
    return this._http.get('http://localhost:3000/users');
  }

  getSingleUser(id:any):Observable<any>{
    return this._http.get(`http://localhost:3000/users/single/${id}`);
  }
}
