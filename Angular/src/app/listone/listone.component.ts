import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';


@Component({
  selector: 'app-listone',
  templateUrl: './listone.component.html',
  styleUrls: ['./listone.component.css']
})
export class ListoneComponent implements OnInit {

  //Property to store current Info
  currentItem: Item = new Item();

  itemID:number;

  constructor(private actRoute:ActivatedRoute,private myItemService: ItemService) { }

  ngOnInit(): void {
    //Extracted the ID from URL
    this.itemID = parseInt(this.actRoute.snapshot.paramMap.get("itemId"));
    console.log(this.itemID);

    //Fetch the item corresponding to the ID
    this.myItemService.getOneItem(this.itemID).subscribe(response =>{
      console.log(response);
      this.currentItem = response;
    })
  }

}