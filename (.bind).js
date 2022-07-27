Function.prototype.bind =  function(obj){
  const fn = this;            // Due to implicit binding ,value of this will be fn because your call site looks like (fn.bind())
  return function(args){
     fn.call(obj,...args); 
  }
}

// const fn2 = fn.bind(obj)
