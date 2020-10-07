import { Component, OnInit } from '@angular/core';
import aboutme from 'src/app/json/aboutme.json';  

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.page.html',
  styleUrls: ['./aboutme.page.scss'],
})
export class AboutmePage implements OnInit {

  constructor() { }
  public data:{name:string, description:string, description1:string, description2:string}[] = aboutme;
  ngOnInit() {
  }

}
