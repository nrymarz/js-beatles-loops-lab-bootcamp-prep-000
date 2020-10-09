// add solution here
function theBeatlesPlay(musicians,instruments){
  var arr = new Array();
  for(let i = 0; i<musicians.length;i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}
