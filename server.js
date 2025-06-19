import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router as monthlyContributionRouter } from "./src/routes/monthly-contribution.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// PORT
const PORT = process.env.PORT || 4001;

//Routes
app.use("/api/monthly-contribution", monthlyContributionRouter);

// app.get("/test-db", async (req, res) => {
// 	try {
// 		const [rows] = await dbPool.query("SELECT 1 + 1 AS result");
// 		res.json(rows);
// 	} catch (err) {
// 		console.error("❌ Test DB Error:");
// 		console.error("Code:", err.code);
// 		console.error("Errno:", err.errno);
// 		console.error("Message:", err.message);
// 		console.error("Stack:", err.stack);

// 		res.status(500).json({
// 			error: "Failed to connect DB",
// 			detail: {
// 				code: err.code,
// 				message: err.message,
// 			},
// 		});
// 	}
// });

app.use("/", (req, res) => {
	res.send("<h1>Hello from Server.ts<h1>");
});

app.use((req, res) => {
	res.send("<h1>Page not found!<h1>");
});

app.listen(PORT, () => {
	console.log(`Server is listening at http://localhost:${PORT}`);
});
