import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addNameTitle',
  pure:true
})
export class AddNameTitlePipe implements PipeTransform {

  transform(value: string, price:number): any {
    // console.log(value);
    // console.log(price);
    if(price <= 2500){
      let transformedData = `Low Price ${value}`;
      return transformedData;
    }else{
      return value;
    }
   
    
  }

}
