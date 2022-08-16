import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensjeans2',
  templateUrl: './mensjeans2.component.html',
  styleUrls: ['./mensjeans2.component.css']
})
export class Mensjeans2Component implements OnInit {
showImage: boolean;
  constructor() { this.showImage= false;}
  showPic(show:boolean){
    this.showImage= show
  }
  ngOnInit(): void {
  }

}
