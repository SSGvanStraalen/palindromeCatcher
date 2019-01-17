//First method:
str.split(' ').forEach((s) => {(s.toLowerCase().split('').reverse().join('') == s.toLowerCase() && s.length > 1) ? console.log(s) : true})
//Second method:
str.split(' ').forEach((string) => {
  if(string.length%2 == 0){
    var x = string.substring(0, string.length/2)
    var y = string.substring(string.length/2, string.length)
    if(x.toLocaleLowerCase() == y.toLowerCase().split('').reverse().join('') && string.length > 1) console.log(string)
  }
  else{
    var x = string.substring(0, string.length/2)
    var y = string.substring(string.length/2+1, string.length)
    if(x.toLocaleLowerCase() == y.toLowerCase().split('').reverse().join('') && string.length > 1) console.log(string)
  }
})
//Third method: (Not working yet)
str.split(' ').forEach((string) => {
  var y;
  string.split('').forEach((char, pos) => {
    console.log(string,char, string[string.length - pos])
    if(char.toLocaleLowerCase() == string[string.length-pos].toLowerCase()){y = true}
    else{y == false}
  })
  if(y){ console.log(string)}
})
