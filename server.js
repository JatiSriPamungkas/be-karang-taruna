import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router as monthlyContributionRouter } from "./src/routes/monthly-contributions.js";
import { router as locationRouter } from "./src/routes/locations.js";
import { router as memberRouter } from "./src/routes/members.js";
import { router as cashRouter } from "./src/routes/cashes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// PORT
const PORT = process.env.PORT || 4001;

//Routes
app.use("/api/monthly-contributions", monthlyContributionRouter);
app.use("/api/locations", locationRouter);
app.use("/api/members", memberRouter);
app.use("/api/cash/", cashRouter);

// Home Greetings
app.get("/", (req, res) => {
	res.send("<h1>Hello from Server.ts</h1>");
});

// Fallback
app.use((req, res) => {
	res.send("<h1>Page not found!</h1>");
});

// Listener
app.listen(PORT, () => {
	console.log(`Server is listening at http://localhost:${PORT}`);
});
