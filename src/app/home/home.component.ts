import { Component, OnInit } from '@angular/core';
import { features } from '../features';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  features:any;
  constructor() { }

  ngOnInit(): void {
    this.features = features;
  }

}
