if(!Date.now){
  Date.now = function(){
    return (new Date(0)).getTime()
  }
}
