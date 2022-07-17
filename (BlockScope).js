try{
  throw 2;
}catch(a){
  console.log(a);   //catch block is block scoped
}

console.log(a) // Reference Error 


// Other way 

try{
  throw undefined;
}catch(a){
  a = 2;
  console.log(a); //2
}

console.log(a);  // Reference Error
