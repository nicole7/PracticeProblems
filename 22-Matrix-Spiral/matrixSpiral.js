//Create a square matrix of a given size in which elements are in spiral order

//Because this algorithm iteratively builds up a square matrix of a given size, its runtime complexity is quadratic for both time and space



const spiral = number => {
    let counter = 1;
    let startRow = 0,
      endRow = number - 1;
    let startColumn = 0,
      endColumn = number - 1;
  
    const matrix = [];
    for (let i = 0; i < number; i++) matrix.push([]);
  
    while (startColumn <= endColumn && startRow <= endRow) {
      // Start Row
      for (let i = startColumn; i <= endColumn; i++) {
        matrix[startRow][i] = counter;
        counter++;
      }
      startRow++;
  
      // End Column
      for (let i = startRow; i <= endRow; i++) {
        matrix[i][endColumn] = counter;
        counter++;
      }
      endColumn--;
  
      // End Row
      for (let i = endColumn; i >= startColumn; i--) {
        matrix[endRow][i] = counter;
        counter++;
      }
      endRow--;
  
      // Start Column
      for (let i = endRow; i >= startRow; i--) {
        matrix[i][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }
  
    return matrix;
  };
