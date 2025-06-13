function convertToRoman(num) {
	if (num <= 0 || num > 100000) return "INVALID";
  // Array of Roman numerals and their corresponding values in descending order	
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

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
// do not edit below this line
module.exports = convertToRoman
console.log(36);
console.log