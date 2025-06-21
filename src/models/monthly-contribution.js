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

// POST METHOD
export const createMonthlyContributions = (nominal, id_created_by) => {
	const SQLQuery = `INSERT INTO monthly_contribution (nominal, creation_date, created_by) VALUES (${nominal}, NOW(), ${id_created_by})`;

	return dbPool.execute(SQLQuery);
};
