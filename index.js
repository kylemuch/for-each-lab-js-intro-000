function iterativeLog(arr) {
  arr.forEach(function(element, index){
    console.log(`${index}: ${element}`)
  })
}

function iterate(cb) {
  var myArr = [1,2,3];
  
  myArr.forEach(function(el){
    el = el++;
  })
  
  return myArr;
}