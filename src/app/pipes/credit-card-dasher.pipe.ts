import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardDasher'
})
export class CreditCardDasherPipe implements PipeTransform {

  transform(value: number): string {
    const cardNum= value.toString();
    if(cardNum.length==16){

              for(let i = 0; i<16; i += 4){
                if(cardNum[i]==cardNum[i+1] && cardNum[i+1]==cardNum[i+2] && cardNum[i+2]==cardNum[i+3])
                {
                  continue;
                }
                else{
                  console.log("invalid card number");
                  alert("invalid card number");
                  return;
                }
              }
              const output=`${cardNum.substr(0,4)}-${cardNum.substr(4,4)}-${cardNum.substr(8,4)}-${cardNum.substr(12,4)}`;
              console.log(output);
              return output;

        }
      }
    }

