const express = require("express");
const app = express();

const helloWorldMiddleware = (req, res, next) => {
	res.send("Hello, World!");
};

app.use(helloWorldMiddleware);

app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000/");
});
