import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Products } from './products';
import { AppInjector } from './app-injector';
import { Router } from '@angular/router';

export interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number
}

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    public subject$ : Subject<any> = new Subject<any>();

    constructor(private httpClient: HttpClient) { }
    getProducts(): Observable<Array<Product>> {
        return this.httpClient
            .get<Array<Product>>('assets/products.json')
    }

    _subject(){
        debugger
        this.subject$.next(true);
    }
}