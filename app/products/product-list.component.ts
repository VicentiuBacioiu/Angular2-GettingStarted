import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    providers: [ProductService]
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageHeight: number = 45;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    products: IProduct[];

    constructor(private _productService: ProductService) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error)
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List:' + message;
    }
}