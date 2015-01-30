var firstReverse = function(s){
	return s.split("").reverse().join("");
}
console.log(firstReverse('hello'));


// 2. 

var swapCase = function(str){
	for(var i=0; i<str.length; i++) {
		if(str[i] === str[i].toUpperCase) {
			return str[i].toLowerCase;
		}
	}

}

console.log(swapCase("Hello"));


var 