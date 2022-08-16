import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {


  listofItems:Item[] = [];

  constructor(private myItemService: ItemService) { }

  ngOnInit(): void {
    this.myItemService.getAllItems().subscribe(response =>{ console.log(response);
    this.listofItems = response;})
  }

}
