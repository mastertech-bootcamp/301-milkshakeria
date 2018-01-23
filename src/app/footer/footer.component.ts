import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  rodape = 'Mastertech 2018';
  sambou = false;

  constructor() { }

  ngOnInit() {
  }

  sambar(){
    this.sambou = true;
  }
}
