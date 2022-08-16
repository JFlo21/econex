import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-womenshoesallpage',
  templateUrl: './womenshoesallpage.component.html',
  styleUrls: ['./womenshoesallpage.component.css']
})
export class WomenshoesallpageComponent implements OnInit {

  listofItems: Item[] = [];

  constructor(private myItemService:ItemService) { }

  ngOnInit(): void {
    this.myItemService.getAllItems().subscribe(response =>{console.log(response);
    this.listofItems = response;})
  }

}
