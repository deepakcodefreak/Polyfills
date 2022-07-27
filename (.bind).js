Function.prototype.bind =  function(fn,obj){
  return function(args){
     fn.call(obj,...args); 
  }
}

// const fn2 = fn.bind(obj)
