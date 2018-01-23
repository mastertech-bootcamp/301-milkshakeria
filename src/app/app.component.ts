import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  produtos = [
    'https://www.completelydelicious.com/wp-content/uploads/2017/07/pie-milkshake-4-660x990.jpg',
    'http://del.h-cdn.co/assets/15/49/640x960/gallery-1448988386-delish-milkshakes-eggnog-chocolate.jpg',
    'https://www.browneyedbaker.com/wp-content/uploads/2012/01/white-russian-milkshake-1-550.jpg'
  ]
}
