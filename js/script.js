var orig = prompt("Write a sentence");
alert(orig);

var length = orig.length;

var firstLetter = orig.charAt(0).toUpperCase();

alert(firstLetter);

var noFirst = orig.slice(1)

alert(noFirst);

var lastLetter = orig.chartAt(length).toUpperCase();

alert(lastLetter);

// var capital = function(firstCap,lastCap) {
// 	return firstCap.toUpperCase() + lastCap.toUpperCase();
// };
//
// alert(capital);
