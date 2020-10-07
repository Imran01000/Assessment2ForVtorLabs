import { Component, OnInit } from '@angular/core';
import mywork from 'src/app/json/mywork.json'; 

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.page.html',
  styleUrls: ['./my-work.page.scss'],
})
export class MyWorkPage implements OnInit {

  constructor() { }
  public data:{name:string, description:string, description1:string, 
    description2:string}[] = mywork;
    
  ngOnInit() {
  }

}
