function splitString(str) {
   var splitStr = str.toLowerCase().split(/[\s,]+/);   
   for (var i = 0; i < splitStr.length; i++) {
     palindrome(splitStr[i]);
   }
}

function palindrome(string){
  var newString = string.split('').reverse().join('');   
  if (string === newString) {
    newString = newString.charAt(0).toUpperCase() + newString.substring(1); 
    console.log("Palindrome: " + newString);
  } 
}

splitString("A guy was driving in a Honda civic minding his own business. When suddenly Anna ran over the street. Because her dog wanted to poop at a spot what was not allowed. Luckly the pokemon girafarig was there to stop the car. On that same moment a Pokemon trainer evolved Eevee to Jolteon. What an exciting day! I have to tell this complete story to my mom. When I went home to tell the story. I relaxed at the irori where I drunk some tee. Finally at noon I was able to tell my family. What was awesome they all had a crazy day them self. We all talked our day over at the irori. Where me and my family now hope you found all the palindromes and hope that you will join our family 2.");
