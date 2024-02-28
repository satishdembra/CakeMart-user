import { Pipe, PipeTransform } from '@angular/core';
import { ProductCatalog } from './product-catalog';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

@Pipe({
  name: 'searchPipe1',
  pure: true,
})
export class SearchPipePipe1 implements PipeTransform {
  transform(products: ProductCatalog[], filterString1: String) {
    if ((products && products.length == 0) || filterString1 == '') {
      return products;
    } else {
      var products = products.filter((prod) => {
        return (
          prod.product_title
            .toLowerCase()
            .includes(filterString1.toLowerCase()) ||
          prod.product_desc.toLowerCase().includes(filterString1.toLowerCase())
        );
      });
      return products;
    }
  }
}
