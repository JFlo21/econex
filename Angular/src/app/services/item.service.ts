import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {



  myItemURL: string = "http://localhost:3000/items"
  
  constructor(private http:HttpClient)  {}

    //List all items
    getAllItems(): Observable<Item[]> {
      return this.http.get<Item[]>(this.myItemURL)
    }
    //a way to get a single item
    getOneItem(reqID: number): Observable<Item>{
      return this.http.get<Item>(`${this.myItemURL}/${reqID}`)
    }
    //  Edit item - compoent needs to provide the ID as well as the updated item info
    updateItem(editID:number, edittedInfo: Item): Observable<Item>{
      return this.http.put<Item>(`${this.myItemURL}/${editID}`, edittedInfo)
    }
    //delete item
    deleteItem(deleteID:number):Observable<any>{
      return this.http.delete<any>(`${this.myItemURL}/${deleteID}`)
    }
    //create item
    createItem(newItem: Item): Observable<Item>{
      return this.http.post<Item>(this.myItemURL, newItem)
    }





}