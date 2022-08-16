import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {



  myItemURL: string = "http://localhost:4000/categories"
  
  constructor(private http:HttpClient, private router: Router)  {}

    //List all items
    getAllItems(): Observable<Item[]> {
      return this.http.get<Item[]>(this.myItemURL)
    }

    getInventoryItems(): Observable<Item[]> {
      const token = localStorage.getItem('token');
      let headers = new HttpHeaders();
      headers = headers.set('Authorization', `Bearer ${token}`);
      return this.http.get<Item[]>(`${this.myItemURL}/inventory`, {headers})
    }
    //a way to get a single item
    getOneItem(reqID: number): Observable<Item>{
      return this.http.get<Item>(`${this.myItemURL}/${reqID}`)
    }
    //  Edit item - compoent needs to provide the ID as well as the updated item info
    updateItem(editID:number, edittedInfo: Item): Observable<Item>{
      const token = localStorage.getItem('token');
      let headers = new HttpHeaders();
      headers = headers.set('Authorization', `Bearer ${token}`);
      return this.http.put<Item>(`${this.myItemURL}/${editID}`, edittedInfo, {headers})
    }
    //delete item
    deleteItem(deleteID:number):Observable<any>{
      const token = localStorage.getItem('token');
      let headers = new HttpHeaders();
      headers = headers.set('Authorization', `Bearer ${token}`);
      return this.http.delete<any>(`${this.myItemURL}/${deleteID}`, {headers})
    }
    //create item
    createItem(newItem: Item): Observable<Item>{
      const token = localStorage.getItem('token');
      let headers = new HttpHeaders();
      headers = headers.set('Authorization', `Bearer ${token}`);
      
      return this.http.post<Item>(this.myItemURL, newItem, {headers})
    }





}
