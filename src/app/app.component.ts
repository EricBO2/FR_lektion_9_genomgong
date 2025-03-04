import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './types/Product';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FR_lektion_9_genomgong';

  //perper API

  productData: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  //on creaton of componenet
  ngOnInit() {
    console.log('Hello world :)');

    this.httpClient
      .get<Product[]>('https://fakestoreapi.com/products')
      .subscribe((respones: Product[]) => {
        this.productData = respones;
      });
  }
}
