import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FR_lektion_9_genomgong';

  //perper API

  productData: any;

  constructor(private httpClient: HttpClient) {}

  //on creaton of componenet
  ngOnInit() {
    console.log('Hello world :)');

    this.httpClient
      .get('https://fakestoreapi.com/products')
      .subscribe((respones) => {
        this.productData = respones;
      });
  }
}
