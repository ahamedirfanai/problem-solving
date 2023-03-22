function power(x, n) {
    
    if (n === 0) {
      return 1;
    }
    
    else if (n % 2 === 0) {
      var y = power(x, n / 2);
      return y * y;
    } 
    
    else {
      return x * power(x, n - 1);
    }
  }
  console.log(power(2, 7));