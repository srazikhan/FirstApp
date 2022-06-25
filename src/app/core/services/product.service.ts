import { Injectable } from '@angular/core';

// @Injectable()

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    const currentDate: Date = new Date();
    let productList = [
      { productId: 1, productName: 'laptop demo', productDescription: 'hehjh', productPrice: 2500, status: 'active', createdAt: currentDate },
      { productId: 2, productName: 'Mobile demo', productDescription: 'hi mobile', productPrice: 5000, status: 'inActive', createdAt: currentDate },
      { productId: 3, productName: 'xyz demo', productDescription: 'hi xyy', productPrice: 5000, status: 'inActive', createdAt: currentDate },
    ]
    return productList
  }
}
