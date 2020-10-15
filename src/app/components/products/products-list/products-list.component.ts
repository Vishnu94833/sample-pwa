import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products:Array<Product>=[{
    "id": "1027",
    "code": "acvx872gc",
    "name": "Yellow Earbuds",
    "description": "Product Description",
    "image": "yellow-earbuds.jpg",
    "price": 89,
    "category": "Electronics",
    "quantity": 35,
    "inventoryStatus": "INSTOCK",
    "rating": 3
  },
  {
    "id": "1028",
    "code": "tx125ck42",
    "name": "Yoga Mat",
    "description": "Product Description",
    "image": "yoga-mat.jpg",
    "price": 20,
    "category": "Fitness",
    "quantity": 15,
    "inventoryStatus": "INSTOCK",
    "rating": 5
  },
  {
    "id": "1029",
    "code": "gwuby345v",
    "name": "Yoga Set",
    "description": "Product Description",
    "image": "yoga-set.jpg",
    "price": 20,
    "category": "Fitness",
    "quantity": 25,
    "inventoryStatus": "INSTOCK",
    "rating": 8
  }];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.getSubject()
    console.log(this.productService._subject());
    this.productService._subject();
  }

  getProducts() {
    this.productService.getProducts().subscribe(res => this.products = res)
  }

  // _subject
  getSubject(){
    debugger
    this.productService.subject$.next('vishnu')
  }
}
 