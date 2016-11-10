import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product Detail';
    id: string;
    private _sub: any;

    constructor(private _route: ActivatedRoute,
                private _router: Router) { }

    ngOnInit() {
        this._sub = this._route.params.subscribe(params => {
            this.id = params['id'];
            this.pageTitle += ": " + this.id;
        });
    }

    ngOnDestroy() {
        this._sub.unsubscribe();
    }

    onBack():void {
        this._router.navigate(['products']);
    }
}