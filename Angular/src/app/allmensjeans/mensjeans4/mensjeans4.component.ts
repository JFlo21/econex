import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensjeans4',
  templateUrl: './mensjeans4.component.html',
  styleUrls: ['./mensjeans4.component.css']
})
export class Mensjeans4Component implements OnInit {
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
