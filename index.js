// add solution here
function theBeatlesPlay(musicians,instruments){
  var arr = new Array();
  for(let i = 0; i<musicians.length;i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}

function johnLennonFacts(facts){
  var i=0;
  var arr = new Array();
  while(i<facts.length){
    i++;
    arr[i] = facts[i].concat("!!!");
  }
}
