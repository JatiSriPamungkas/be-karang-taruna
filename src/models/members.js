import { dbPool } from "../config/database.js";

export const getMembers = async (per_page, page, search, status) => {
  const searchPattern = `%${search}%`;
  const offset = (page - 1) * per_page;

  const SQLDataQuery = `
		SELECT *
		FROM members
		WHERE status = '${status}' AND (fullname LIKE ? OR nickname LIKE ?)
		LIMIT ${per_page} OFFSET ${offset};
	`;

  const SQLCountQuery = `
		SELECT COUNT(*) as Total
		FROM members
		WHERE status = '${status}' AND (fullname LIKE ? OR nickname LIKE ?);
	`;

  const [data] = await dbPool.execute(SQLDataQuery, [
    searchPattern,
    searchPattern,
  ]);
  const [total] = await dbPool.execute(SQLCountQuery, [
    searchPattern,
    searchPattern,
  ]);

  return {
    data,
    total: total[0].Total,
  };
};

export const getCredentialMembers = (email, username) => {
  const SQLQuery = `SELECT * FROM members WHERE email = ? OR username = ?;`;

  return dbPool.execute(SQLQuery, [email, username]);
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
