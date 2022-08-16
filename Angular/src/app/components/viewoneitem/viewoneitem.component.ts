import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-viewoneitem',
  templateUrl: './viewoneitem.component.html',
  styleUrls: ['./viewoneitem.component.css']
})
export class ViewoneitemComponent implements OnInit {

  currentItem: Item = new Item();
  itemID:number;
  
  constructor(private myItemService: ItemService,private actRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.itemID = parseInt(this.actRoute.snapshot.paramMap.get("itemId"));
    console.log(this.itemID);

    this.myItemService.getOneItem(this.itemID).subscribe(response =>{
      console.log(response);
      this.currentItem = response;
  }
  
)}
}