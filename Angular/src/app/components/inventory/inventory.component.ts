import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  listofItems:Item[] = [];

  constructor(private myItemService: ItemService) { }

  ngOnInit(): void {
    this.myItemService.getAllItems().subscribe(response =>{ console.log(response);
    this.listofItems = response;})
  }
  deleteItem(itemId:number){
    console.log("Testing" + itemId);
    this.myItemService.deleteItem(itemId).subscribe(response =>{
      console.log(response);
      this.ngOnInit();
    })
  }
}
