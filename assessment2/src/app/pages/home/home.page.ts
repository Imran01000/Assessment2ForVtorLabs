import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import homepage from 'src/app/json/homepage.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public folder: string;
  constructor(private activatedRoute: ActivatedRoute) { }
  public data:{name:string, description:string}[] = homepage;
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
