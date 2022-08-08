import { Component, OnInit } from '@angular/core';
import { Portfolio } from './../portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  imgSrc:string = '';
  titleSrc:string = '';

  allimages:Portfolio[] = [
    {image : 'assets/images/cabin.png' , title : 'LOG CABIN'},
    {image : 'assets/images/cake.png' , title : 'TASTY CAKE'},
    {image : 'assets/images/circus.png' , title : 'CIRCUS TENT'},
    {image : 'assets/images/game.png' , title : 'CONTROLLER'},
    {image : 'assets/images/safe.png' , title : 'LOCKED SAFE'},
    {image : 'assets/images/submarine.png' , title : 'SUBMARINE'}
  ]

  pressImg (value:any) {
    this.imgSrc = value.image;
    this.titleSrc = value.title;
    let item = document.getElementById('item');
    item?.classList.remove('d-none')
  }

  closeWindow () {
    let item = document.getElementById('item');
    item?.classList.add('d-none')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
