import { dbPool } from "../config/database.js";

export const getMembers = (per_page, page, search, status) => {
	const searchPattern = `%${search}%`;
	const offset = (page - 1) * per_page;

	const SQLQuery = `SELECT * FROM members WHERE status = '${status}' AND (fullname LIKE ? OR nickname LIKE ?)  LIMIT ${per_page} OFFSET ${offset};`;

	return dbPool.execute(SQLQuery, [searchPattern, searchPattern]);
};

export const createMembers = (
	email,
	telephone,
	fullname,
	nickname,
	gender,
	date_of_birth,
	id_location_detail,
	username,
	password,
	is_active,
	created_by,
	last_update_by
) => {
	const SQLQuery = `INSERT INTO members (email, telephone, fullname, nickname, gender, date_of_birth, id_location_detail, username, password, request_date, is_active, status, status_action_date, creation_date, created_by, last_update_date, last_update_by) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?, 'pending', NOW(), NOW(), ?, NOW(), ?);`;

	return dbPool.execute(SQLQuery, [
		email,
		telephone,
		fullname,
		nickname,
		gender,
		date_of_birth,
		id_location_detail,
		username,
		password,
		is_active,
		created_by,
		last_update_by,
	]);
};

export const updateMembers = (
	id_member,
	email,
	telephone,
	fullname,
	nickname,
	gender,
	date_of_birth,
	id_location_detail,
	username,
	password,
	is_active,
	status,
	created_by,
	last_update_by
) => {
	const SQLQuery = `UPDATE members SET email = ?, telephone = ?, fullname = ?, nickname = ?, gender = ?, date_of_birth = ?, id_location_detail = ?, username = ?, password = ?, is_active = ?, status = ?, created_by = ?, last_update_date = NOW(), last_update_by = ? WHERE id_member = ?`;

	return dbPool.execute(SQLQuery, [
		email,
		telephone,
		fullname,
		nickname,
		gender,
		date_of_birth,
		id_location_detail,
		username,
		password,
		is_active,
		status,
		created_by,
		last_update_by,
		id_member,
	]);
};

export const deleteMembers = (id_member) => {
	const SQLQuery = `DELETE FROM members WHERE id_member = ?`;

	return dbPool.execute(SQLQuery, [id_member]);
};
