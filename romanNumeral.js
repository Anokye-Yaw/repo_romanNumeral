function convertToRomanNumeral(num){
const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
const number = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
   
   let result = "";
   for(let i=0;i<roman.length;i++){
      while(num >= number[i]){  
       result += roman[i];
       num -= number[i];

   }   
 }
    return result;
}
convertToRomanNumeral(400);
