var orig = prompt("Write a sentence");
alert(orig);

var length = orig.length;

var firstCap = orig.charAt(0).toUpperCase();

//alert(firstCap);

var noFirstLast = orig.slice(1,length-1)
//alert(noFirstLast);

var lastCap = orig.slice(length-1).toUpperCase();

//alert(lastCap);

alert(firstCap + noFirstLast + lastCap);
