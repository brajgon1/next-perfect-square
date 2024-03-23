function perfectSquare(num) {
    let squareRoot = Math.sqrt(num);
    if (Number.isInteger(squareRoot)) {
      return Math.pow(squareRoot + 1, 2);
    } else {
      return -1;
    }
  }
  
  console.log(perfectSquare(9))