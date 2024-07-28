function memoize(func) {
    const cache = {};
    
    return function(key) {
      if (cache[key] !== undefined) {
        return cache[key];
      }
      const result = func(key);
      cache[key] = result;
      return result;
    };
  }
  
  const getDouble = (num) => {
    console.log('Computing...');
    return num * 2;
  };
  
  const memoizedFunction = memoize(getDouble);
  
  console.log(memoizedFunction(5));
  console.log(memoizedFunction(5));
  console.log(memoizedFunction(5));
  console.log(memoizedFunction(10));
  console.log(memoizedFunction(10)); 
  console.log(memoizedFunction(20)); 
  

  
