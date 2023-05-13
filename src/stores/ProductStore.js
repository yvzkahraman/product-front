import { action, makeObservable, observable } from 'mobx'

class ProductStore {
    products = [];
    selectedProduct = {};

    constructor() {
        makeObservable(this, {
            products: observable,
            setProducts: action,
            selectedProduct: observable,
            setSelectedProduct: action,
        })
    }

    setSelectedProduct(product) {
        this.selectedProduct = product;
    }

    setProducts(products) {
        this.products = products;
    }
}

export const productStore = new ProductStore();