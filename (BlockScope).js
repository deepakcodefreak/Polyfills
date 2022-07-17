try{
  throw 2;
}catch(a){
  console.log(a);   //catch block is block scoped
}

console.log(a) // Reference Error 
