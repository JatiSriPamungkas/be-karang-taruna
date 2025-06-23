import { dbPool } from "../config/database.js";

export const getLocations = (per_page, page, search) => {
	const searchPattern = `%${search}%`;
	const offset = (page - 1) * per_page;

	const SQLQuery = `SELECT * FROM locations WHERE location_name LIKE ? OR description LIKE ? LIMIT ${per_page} OFFSET ${offset};`;

	return dbPool.execute(SQLQuery, [searchPattern, searchPattern]);
};

export const getLocationsById = (id_location) => {
	const SQLQuery = `SELECT * FROM locations WHERE id_location = ?`;

	return dbPool.execute(SQLQuery, [id_location]);
};

export const getAllLocations = () => {
	const SQLQuery = `SELECT * FROM locations;`;

	return dbPool.execute(SQLQuery);
};

export const createLocations = (location_name, description, created_by, last_update_by) => {
	const SQLQuery = `INSERT INTO locations (location_name, description, creation_date, created_by, last_update_date, last_update_by) 
                    VALUES (?, ?, NOW(), ?, NOW(), ?)`;

	return dbPool.execute(SQLQuery, [location_name, description, created_by, last_update_by]);
};

export const updateLocations = (id_location, location_name, description, last_update_by) => {
	const SQLQuery = `UPDATE locations SET location_name = ?, description = ?, last_update_date = NOW(), last_update_by = ? WHERE id_location = ?`;

	return dbPool.execute(SQLQuery, [location_name, description, last_update_by, id_location]);
};

export const deleteLocations = (id_location) => {
	const SQLQuery = `DELETE FROM locations WHERE id_location = ?`;

	return dbPool.execute(SQLQuery, [id_location]);
};
