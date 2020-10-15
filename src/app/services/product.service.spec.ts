import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController }
    from '@angular/common/http/testing';

import { Product, ProductService } from './product.service';
export const mockProduct: Product = {
    id: "1029",
    code: "gwuby345v",
    name: "Yoga Set",
    description: "Product Description",
    image: "yoga-set.jpg",
    price: 20,
    category: "Fitness",
    quantity: 25,
    inventoryStatus: "INSTOCK",
    rating: 8
};


describe('ProductService', () => {
    let httpTestingController: HttpTestingController;
    let service: ProductService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductService],
            imports: [HttpClientTestingModule]
        });

        httpTestingController = TestBed.get(HttpTestingController);
        service = TestBed.get(ProductService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('random should should provide data', () => {
        service.getProducts().subscribe((product: any) => {
            expect(product).not.toBe(null);
            expect(JSON.stringify(product)).toEqual(JSON.stringify(mockProduct));
        });

        const req = httpTestingController
            .expectOne(`assets/products.json`);
        req.flush(mockProduct);
    });
});
