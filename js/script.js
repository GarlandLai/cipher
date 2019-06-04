var orig = prompt("Write a sentence");
alert(orig);

var length = orig.length;

var firstCap = orig.charAt(0).toUpperCase();

//alert(firstCap);

var noFirstLast = orig.slice(1,length-1)
//alert(noFirstLast);

var lastCap = orig.slice(length-1).toUpperCase();

//alert(lastCap);

//alert(firstCap + noFirstLast + lastCap); or

var firstLastCap = firstCap + noFirstLast + lastCap;
alert(firstLastCap);

var revFirstLastCap = lastCap + noFirstLast + firstCap;
alert(revFirstLastCap);

//Create a third function that calls the other two functions you've just created. For example, if I enter the sentence "I am a sentence", it should enter your first function (which should output "IE"), then call your second function, passing in the output value from the previous. It would return "EI" to me.
var previousTwo = function(){
  var firstLastCap;
  var revFirstLastCap;
}
alert (previousTwo);
