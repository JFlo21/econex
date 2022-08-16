import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensjeans5',
  templateUrl: './mensjeans5.component.html',
  styleUrls: ['./mensjeans5.component.css']
})
export class Mensjeans5Component implements OnInit {
  showImage: boolean;
  constructor() { this.showImage= false;}
  showPic(show:boolean){
    this.showImage= show
  }
  ngOnInit(): void {
  }

}
