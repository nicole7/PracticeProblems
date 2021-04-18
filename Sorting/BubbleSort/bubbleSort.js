const bubbleSort = (array) => {
    let swapped;
    do {
        swapped = false;
        array.forEach((number, index) => {
            if (number > array[index + 1]) {
                [array(index)] = [array(index + 1)];
                [array(index + 1)] = [array(index)];
                swapped = true;
            };
        });
    } while (swapped);
    return array;
};


const _bubbleSort = (array) => {
    let less = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; i++) {
            if (array[j] > array[j + 1]) {
                less = array[j + 1]
                array[j + 1] = array[j];
                array[j] = less;
            };
        };
    };
    return array;
};






const isValidDenomination = (serialDenomination) => {
    let denomination = [10, 20, 50, 100, 200, 500, 1000];
    
    for(let index = 0; index < denomination.length; index++){
        if(denomination[index] === serialDenomination){
          return true;
      };
    };
    return false;
  };
  
  const isValidSerialLetters = (letters) => {
      for(let index = 0; index < letters.length; index++){
        if(!letters[index].match(/^[A-Z]*$/)){
      return false;
      };
    };
    
    return false;
  };
  
  const isCounterfeit = (number) => {
       let isCounterfeitNumber;
       let splitSerialNumber = number.split("");
     let distinctLetters = splitSerialNumber.slice(0,3);
     let serialYear = parseInt(splitSerialNumber.slice(3,7).join(""));
     let serialDenomination = parseInt(splitSerialNumber.slice(7,-1));
     let storeValidCurrency = [];
     
      if(splitSerialNumber.length < 10 || splitSerialNumber.length > 12){
         return 0;
      if(distinctLetters) {
       
      }
      } else if(!(serialYear >= 1900 && serialYear <= 2019)){
          return 0;
      } else if(!isValidDenomination(serialDenomination)){
          return 0;
      } else if (!number[-1].match(/^[A-Z]*$/)) {
          return 0;
      } else {
        storeValidCurrency.push(serialDenomination);
      }
      
      console.log(storeValidCurrency.reduce((sum, value) => sum + value))
  };
  
  const countCounterfeit = (serialNumber) => {
      //check there are 10 to 12 characters
      //check first 3 elements are non-repeating uppercase letters
      //check next 4 elements are numbers between 1900 - 2019
      //check next 3 elements are numbers in {10, 20, 50, 100, 200, 500, 1000}
      //check the last 1 element is an uppercase letter
     
      let serialNumberLength = serialNumber.length;
      
      for(let i = 0; i < serialNumberLength; i++){
          isCounterfeit(serialNumber[i]);
      };
  
  };
  
  
  
  countCounterfeit(["A201550B","ABB19991000Z","XYZ200019Z","ERF200220","SCD203010T", "SCD200010T"])
  
  
  
  