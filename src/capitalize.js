const string = "test test test";
function capitalize(string) {
	let arr = string.split(' ');
	let newArr = arr.map(function (word) {
		return word[0].toUpperCase() + word.substring(1);
	})
	let result = newArr.join(' ');
	return result;
}
console.log(capitalize(string));

module.exports = capitalize;
