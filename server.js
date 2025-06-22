import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router as monthlyContributionRouter } from "./src/routes/monthly-contributions.js";
import { router as locationRouter } from "./src/routes/locations.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// PORT
const PORT = process.env.PORT || 4001;

//Routes
app.use("/api/monthly-contributions", monthlyContributionRouter);
app.use("/api/locations", locationRouter);

app.use("/", (req, res) => {
	res.send("<h1>Hello from Server.ts</h1>");
});

app.use((req, res) => {
	res.send("<h1>Page not found!<h1>");
});

app.listen(PORT, () => {
	console.log(`Server is listening at http://localhost:${PORT}`);
});
