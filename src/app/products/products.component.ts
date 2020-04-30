import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit { 
  ProductName='A Mango';
  isDisabled =true;
  products = ['This is product 1','This is product 2'];
  productClicked: any;
  


  constructor() { 
    setTimeout(() => {
      // this.ProductName = 'hello this is product';
      this.isDisabled =false;
    }, 3000);

   
  }
  onRemoveProduct(ProductName: string) {
   this.products = this.products.filter(p => p !== ProductName);
  }

  onAddProduct(){
     this.products.push(this.Prod0uctName);
  }

  onClicked(){
    this.productClicked.emit();
  }

  ngOnInit() {
  }

}
