import { dbPool } from "../config/database.js";

// GET METHOD
export const getAllMonthlyContributions = () => {
	const SQLQUERY = `SELECT * FROM monthly_contribution;`;

	return dbPool.execute(SQLQUERY);
};

export const getLatestMonthlyContributions = () => {
	const SQLQuery = `SELECT * FROM monthly_contribution ORDER BY id_monthly_contribution DESC LIMIT 1;`;

	return dbPool.execute(SQLQuery);
};
