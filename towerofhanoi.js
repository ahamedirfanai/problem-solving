

     function towerOfHanoi(n, from, to, aux) {
      if (n == 0) return;
  
      towerOfHanoi(n-1, from, aux, to);
      console.log(`Move disk ${n} from rod ${from} to rod ${to}`);
      towerOfHanoi(n-1, aux, to, from);
    }
  
     
      const n = 3;
     towerOfHanoi(n, 'A', 'C', 'B');
     
    
    
  
  

  