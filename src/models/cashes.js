import { dbPool } from "../config/database.js";

export const getCashes = async (type, per_page, page, search) => {
	const searchPattern = `%${search}%`;
	const offset = (page - 1) * per_page;

	const SQLDataQuery = `SELECT * FROM (
                    SELECT 
                        id_income as id,
                        income_date as date,
                        'income' as type,
                        nominal,
                        description,
                        creation_date,
                        created_by,
                        last_update_date,
                        last_update_by
                    FROM income
                    UNION ALL
                    SELECT 
                        id_expense as id,
                        expense_date as date,
                        'expense' as type,
                        nominal,
                        description,
                        creation_date,
                        created_by,
                        last_update_date,
                        last_update_by
                    FROM expense
                    ) AS cashes
                    WHERE date LIKE ? OR type LIKE ? OR description LIKE ? ${
						type ? "AND type = ?" : ""
					}
                    ORDER BY date DESC
                    LIMIT ${per_page} OFFSET ${offset};
                    `;

	const SQLCountQuery = `SELECT COUNT(*) AS Total FROM (
                    SELECT 
                        id_income as id,
                        income_date as date,
                        'income' as type,
                        nominal,
                        description,
                        creation_date,
                        created_by,
                        last_update_date,
                        last_update_by
                    FROM income
                    UNION ALL
                    SELECT 
                        id_expense as id,
                        expense_date as date,
                        'expense' as type,
                        nominal,
                        description,
                        creation_date,
                        created_by,
                        last_update_date,
                        last_update_by
                    FROM expense
                    ) AS cashes
                    `;

	const params = type
		? [searchPattern, searchPattern, searchPattern, type]
		: [searchPattern, searchPattern, searchPattern];

	const [data] = await dbPool.execute(SQLDataQuery, params);
	const [total] = await dbPool.execute(SQLCountQuery);

	return {
		data,
		total: total[0].Total,
	};
};

export const getCashesByType = (type) => {
	const SQLQuery = `SELECT * FROM (
                    SELECT 
                        id_income as id,
                        income_date as date,
                        'income' as type,
                        nominal,
                        description,
                        creation_date,
                        created_by,
                        last_update_date,
                        last_update_by
                    FROM income
                    UNION ALL
                    SELECT 
                        id_expense as id,
                        expense_date as date,
                        'expense' as type,
                        nominal,
                        description,
                        creation_date,
                        created_by,
                        last_update_date,
                        last_update_by
                    FROM expense
                    ) AS cashes ${type ? "WHERE type = ?" : ""}`;

	return dbPool.execute(SQLQuery, [type]);
};

export const createNewTransactions = (
	date,
	type,
	nominal,
	description,
	created_by,
	last_update_by
) => {
	const table = type == "income" ? "income" : "expense";
	const date_field = type == "income" ? "income_date" : "expense_date";

	const SQLQuery = `INSERT INTO ${table} (${date_field}, nominal, description, creation_date, created_by, last_update_date, last_update_by)
                    VALUES (?, ?, ?, NOW(), ?, NOW(), ?);`;

	return dbPool.execute(SQLQuery, [date, nominal, description, created_by, last_update_by]);
};

export const updateTransactions = (
	id_field,
	type,
	nominal,
	description,
	created_by,
	last_update_by
) => {
	const table = type == "income" ? "income" : "expense";
	const data_field = type == "income" ? "id_income" : "id_expense";

	const SQLQuery = `UPDATE ${table} SET nominal = ?,  description = ?, created_by = ?, last_update_date = NOW(), last_update_by = ? WHERE ${data_field} = ?`;

	return dbPool.execute(SQLQuery, [nominal, description, created_by, last_update_by, id_field]);
};

export const deleteTransactions = (id_field, type) => {
	const table = type == "income" ? "income" : "expense";
	const data_field = type == "income" ? "id_income" : "id_expense";

	const SQLQuery = `DELETE FROM ${table} WHERE ${data_field} = ?`;

	return dbPool.execute(SQLQuery, [id_field]);
};
