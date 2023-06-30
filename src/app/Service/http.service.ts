import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../Classes/item';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  api_url = "http://localhost:3000/item"

  constructor(private http : HttpClient) { }
  getItems() : Observable<Item[]>{
    return this.http.get<Item[]>(this.api_url);
  }
  postItem(formData:any):Observable<Item[]>{
    return this.http.post<Item[]>(this.api_url, formData);

  }
  deleteHandle(id : number):Observable<Item[]>{
    return this.http.delete<Item[]>(`${this.api_url}/${id}`)
  }
  getSingleData(id : number):Observable<Item[]>{
    return this.http.get<Item[]>(`${this.api_url}/${id}`)
  }
  editData(id:any, formData : any):Observable<Item[]>{
     return this.http.put<Item[]>(`${this.api_url}/${id}`, formData)
  }
}
