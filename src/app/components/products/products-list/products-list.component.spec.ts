import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController }
  from '@angular/common/http/testing';
import { ProductsListComponent } from './products-list.component';
import { of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { By } from '@angular/platform-browser';
import * as Rx from 'rxjs';
import { delay } from "rxjs/operators";

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let mockProductService;
  let PRODUCTS;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProductsListComponent],
      providers: [ProductService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    mockProductService = jasmine.createSpyObj(['getProducts']);
    component = new ProductsListComponent(mockProductService);
    PRODUCTS = [
      {
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
      }
    ]

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get all products from ProductService', () => {
    mockProductService.getProducts.and.returnValue(of(PRODUCTS));
    fixture.detectChanges();
    expect(fixture.componentInstance.products.length).toBe(3);
  })

  it('should create one li for each product', () => {
    mockProductService.getProducts.and.returnValue(of(PRODUCTS))
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
  })
});