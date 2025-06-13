function convertToRoman(num) {
	if (num <= 0 || num > 100000) return "INVALID";
	
  	const obj = [
      ['M',1000], 
      ['D', 500], 
      ['C', 100], 
      ['L', 50], 
      ['X', 10], 
      ['V', 5], 
      ['I', 1],
	  ['CM', 900],
	  ['CD', 400],
	  ['XC', 90],
	  ['XL', 40],
	  ['IV', 4],
	  ['IX', 9]	
    ];

  //your code here
let result = "";
for (let [symbol, value] of obj) {
	while (num >= value) {
		result += symbol;
		num -= value;
	}
}
	return result;
}

// Example usage
console.log(convertToRoman(14)); // output: XIV

// do not edit below this line
module.exports = convertToRoman
