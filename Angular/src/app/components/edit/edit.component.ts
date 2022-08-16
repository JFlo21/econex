import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  editItem: Item = new Item();

  itemID:number;

  constructor(private actRoute:ActivatedRoute,private myItemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    //Extracted the ID from URL
    this.itemID = parseInt(this.actRoute.snapshot.paramMap.get("itemId"));
    console.log(this.itemID);

    //Fetch the item corresponding to the ID
    this.myItemService.getOneItem(this.itemID).subscribe(response =>{
      console.log(response);
      this.editItem = response;
    })
  }
  updateItem(){
    this.myItemService.updateItem(this.itemID, this.editItem).subscribe(response=>{
      console.log(response);
      this.router.navigate(["inventory"]);
    })
  }
  
}
