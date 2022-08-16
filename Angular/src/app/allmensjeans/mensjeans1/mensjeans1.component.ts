import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensjeans1',
  templateUrl: './mensjeans1.component.html',
  styleUrls: ['./mensjeans1.component.css']
})
export class Mensjeans1Component implements OnInit {
  title = "mouse-hover";
  showImage:boolean;
  constructor() { this.showImage= false;
    
  }
showPic(show:boolean){
      this.showImage= show
    }
  ngOnInit(): void {
  }
 
  }




