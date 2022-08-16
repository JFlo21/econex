import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newItem: Item = new Item();
  

  

  

  constructor(private myItemsService: ItemService, private router:Router, private http:HttpClient) {
    
   }

  ngOnInit(): void {
   
  }
  
  createNew(){
    this.myItemsService.createItem(this.newItem).subscribe(response => {
      console.log(response);
      this.router.navigate(["inventory"]);
    })
  }
  
}