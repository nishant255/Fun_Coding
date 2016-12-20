function orderedWords(String) {
  for(var i = 0; i < String.length; i++) {
    if (String[i+1] < String[i]){
      return String + " not in Order";
    }
    else
    {
      return String + " in Order";
    }
  }
  return String + " Invalid Input";
}

function encrypt(String) {
  var hold = String[0];
  var count = 0;
  var arrnew = [];
  for(var i = 0; i < String.length; i++) {
    if(hold === String[i]){
      count++;
    }
    else
    {
      arrnew.push([hold,count]);
      hold = String[i];
      count = 1;
    }
    
  }
  arrnew.push([hold,count]);
  console.log(arrnew);
  return arrnew;
}

function one_off_words(str, word_list) {
  var same = 0;
  var arrnew = [];
  for (var i = 0; i < word_list.length; i++)  {
    for (var j = 0; j < str.length; j++){
      if(str.length != word_list[i].length){
        break;
      }
      if(str[j] === word_list[i][j]){
        same++
      }
    }
    if(same === word_list[i].length-1){
      arrnew.push(word_list[i]);
      same = 0;
    }
  }
  console.log(arrnew);
  return arrnew;
}

console.log(one_off_words("moor", ["door", "moot", "boot", "boots"]));