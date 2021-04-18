
const isValidDenomination = (serialDenomination) => {
    let denomination = [10, 20, 50, 100, 200, 500, 1000];
    let number = [];
       let length = serialDenomination
       let amount = "";
    
    for(let index = 0; index < serialDenomination.length; index++){
         if(Number.isInteger(parseInt(serialDenomination[index]))) {
            number.push(serialDenomination[index])
            } 
    };
    
    /* console.log(denomination[1] === parseInt(number.join(""))) */
    
     for(let index = 0; index < denomination.length; index++){
       if(denomination[index] === parseInt(number.join(""))){
            return  number.join("");
       }; 
     }; 
     
    return false;
  };
  
  const isValidSerialLetters = (letters) => {
      const pairs = [];
    const store = [];
      if(letters.length === 1 && !letters[0].match(/^[A-Z]*$/)) {
        return false
    }else {
    
      for (let letter of letters) {
            const letterPair = letter;
            if (store.includes(letterPair) || !letter.match(/^[A-Z]*$/)) {
             return false;
            } else {
                pairs.push(letter);
            };
            store.push(letterPair);
        };
      };
        
      return true;
  };
  
  const isCounterfeit = (number = "SCD200010T") => {
      
     let splitSerialNumber = number.split("");
     let distinctLetters = number.split("").slice(0,3).join("");
     let serialYear = number.split("").slice(3,7).join("");
     let serialDenomination = number.split("").slice(7,-1);
     let storedAmounts = [];
        //console.log(serialYear)
          //console.log(number.length)
      if(splitSerialNumber.length < 10 || splitSerialNumber.length > 12){
         return 0;
      } else if (!isValidSerialLetters(distinctLetters)) {
         return 0;
      }else if(!(parseInt(serialYear) >= 1900 && parseInt(serialYear) <= 2019)){
        return 0;
      } else if(isValidDenomination(serialDenomination) === 0){
        return 0;
      } 
      else if (isValidSerialLetters(number[-1])) {
        return 0;
      } else {
             storeAmount.push(isValidDenomination(serialDenomination))
      //console.log(number)
      //console.log(serialDenomination)
             /* console.log(isValidDenomination(serialDenomination)); */
      }  
      
      return storeAmount
  };
  
  const countCounterfeit = (serialNumber) => {
      //check there are 10 to 12 characters
      //check first 3 elements are non-repeating uppercase letters
      //check next 4 elements are numbers between 1900 - 2019
      //check next 3 elements are numbers in {10, 20, 50, 100, 200, 500, 1000}
      //check the last 1 element is an uppercase letter
     let storeValidCurrency = [];
     let totalValue = 0;
     
       //totalValue = storeValidCurrency.reduce((sum, value) => sum + value)
      //console.log(storeValidCurrency);
      isCounterfeit("SCD200010T")
     
      for(let i = 0; i <  serialNumber.length; i++){
         
          /* if(isCounterfeit(serialNumber[i]) !== 0) {
                  storeValidCurrency.push(serialDenomination);
                }; */
      };
  
  };
  
  //isValidDenomination([1,2,3, "N"])
  
  countCounterfeit(["A201550B","ABB19991000Z","XYZ200019Z","ERF200220","SCD203010T", "SCD200010T"])