import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensjeans3',
  templateUrl: './mensjeans3.component.html',
  styleUrls: ['./mensjeans3.component.css']
})
export class Mensjeans3Component implements OnInit {
  showImage: boolean;
  constructor() { 
    this.showImage=false;
  }
  showPic(show:boolean){
    this.showImage= show
  }
  ngOnInit(): void {
  }

}
