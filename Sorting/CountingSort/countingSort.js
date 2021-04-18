const countingSort = (array, max) => {
    const counts = new Array(max + 1);
    counts.fill(0);
    array.forEach(value => counts[value]++);
  
    const result = [];
    let resultIndex = 0;
  
    counts.forEach((count, index) => {
      for (let i = 0; i < count; i++) {
        result[resultIndex] = index;
        resultIndex++;
      }
    });
  
    return result;
  };
  