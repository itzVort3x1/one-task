function sumArrayIntegers() {
	const readline = require("readline");

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	rl.question("Enter the array of integers (comma-separated): ", (input) => {
		rl.close();

		const numbers = input.split(",").map((num) => parseInt(num.trim(), 10));

		const sum = numbers.reduce((acc, num) => acc + num, 0);

		console.log("Sum of the numbers:", sum);
	});
}

sumArrayIntegers();
