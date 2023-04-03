function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      } else if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return { min, max };
  }
  
  const arr = [1000, 11, 445, 1, 330, 3000];
  const { min, max } = findMinMax(arr);
  
  console.log(`Minimum element is ${min}`);
  console.log(`Maximum element is ${max}`);
  