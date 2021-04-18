const sockPairs = (array) => {
    let pairs = 0;
    let frequency = {}
    
    for(let i = 0; i < array.length; i++){
        //use ternary
      let sock = array[i]
        frequency[sock] = frequency[sock] ? frequency[sock] + 1 : 1;
    };
    
    for(key in frequency){
        if(frequency[key] > 1){
      pairs += Math.floor(frequency[key] / 2)
      }
    }
    
    console.log(pairs)
  };
  
sockPairs([1, 2, 1, 2, 1, 2, 3])
  

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function countingValleys(steps, array) {
    // Write your code here
    let seaLevelCount = 0;
    let stepCount = 0;
    let valleyCount = 0;
  
  while(stepCount < steps){
      if(array[stepCount] === "D"){
        seaLevelCount -= 1;
    } else if (array[stepCount] === "U") {
        seaLevelCount += 1;
    }
    
    if(seaLevelCount % 2 === 0 && seaLevelCount > -1){
        valleyCount += 1;
       
    };
    
      stepCount++;
  };
  
  return valleyCount - 1;
  
}

valleyCount(['D', 'D', 'U', 'U', 'D', 'D', 'U', 'D', 'U', 'U', 'U', 'D'], 12)

///////////////////////////////////////////////////////////////////////////////////////////////////////////


const cloudCount = (c) => {
    let cloudCounter = 0;
let cloudLength = c.length;
let counter = 0;
//see how far you can get first
//then check if its a thindercloud

while(counter < cloudLength){
   console.log("counter", counter)
 console.log("cloudCounter", cloudCounter)
   if(c[counter] + 2 == 1){
     if(c[counter] + 1 == 1){
          return 1;
   } else if (c[counter] + 1 !== 1){
       cloudCounter++;
     counter += 1;
   } 
 } else if (c[counter] + 2 !== 1){
       cloudCounter++;
     counter += 2;
   }

}

console.log(cloudCounter)
};

cloudCount([0, 0, 0, 1, 0, 0]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////



