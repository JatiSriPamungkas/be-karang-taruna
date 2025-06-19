import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const dbPool = mysql
	.createPool({
		host: process.env.DB_HOST,
		user: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		ssl: {
			rejectUnauthorized: false,
		},
	})
	.promise();
