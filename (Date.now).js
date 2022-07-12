if(!Date.now){
  Date.now = function(){
    return (new Date(0)).getTime()
  }
}

// other way
// '+' operator when used with single operand, it does the toNumber coersion  

if(!Date.now){
  Date.now = function(){
    return +new Date()
  }
}
