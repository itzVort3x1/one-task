const fs = require("fs");
const readline = require("readline");

function countWords(text) {
	const words = text.split(/\s+/).filter((word) => word !== "");
	return words.length;
}

function readFile() {
	try {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		rl.question("Enter the file name (e.g., data.txt): ", (fileName) => {
			rl.close();

			fs.readFile(fileName, "utf8", (err, data) => {
				if (err) {
					console.error("Error reading the file:", err.message);
				} else {
					const wordCount = countWords(data);
					console.log("Total word count:", wordCount);
				}
			});
		});
	} catch (err) {
		console.log("Error in reading the file: " + err);
	}
}

readFile();
