import { dbPool } from "../config/database.js";

export const getMembers = async (per_page, page, search, status) => {
  const searchPattern = `%${search}%`;
  const offset = (page - 1) * per_page;

  const SQLDataQuery = `
		SELECT m.*, s.location_name
		FROM members m
    LEFT JOIN locations s ON s.id_location = m.id_location_detail
		WHERE m.status = '${status}' AND (m.fullname LIKE ? OR m.nickname LIKE ? OR s.location_name LIKE ?)
		LIMIT ${per_page} OFFSET ${offset};
	`;

  const SQLCountQuery = `
		SELECT COUNT(*) as Total
		FROM members m
    LEFT JOIN locations s ON s.id_location = m.id_location_detail
		WHERE m.status = '${status}' AND (m.fullname LIKE ? OR m.nickname LIKE ? OR s.location_name LIKE ?);
	`;

  const [data] = await dbPool.execute(SQLDataQuery, [
    searchPattern,
    searchPattern,
    searchPattern,
  ]);
  const [total] = await dbPool.execute(SQLCountQuery, [
    searchPattern,
    searchPattern,
    searchPattern,
  ]);

  return {
    data,
    total: total[0].Total,
  };
};

export const selectMemberById = (id_member) => {
  const SQLQuery = `
    SELECT m.*, s.location_name
		FROM members m
    LEFT JOIN locations s ON s.id_location = m.id_location_detail
    WHERE m.id_member = ?;
  `;

  return dbPool.execute(SQLQuery, [id_member]);
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
  created_by,
  status
) => {
  const SQLQuery = `
    INSERT INTO members (
      email,
      telephone,
      fullname,
      nickname,
      gender,
      date_of_birth,
      id_location_detail,
      username,
      password,
      request_date,
      is_active,
      status,
      creation_date,
      created_by) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), 1, ?, NOW(), ?);
  `;

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
    status,
    created_by,
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
  last_update_by
) => {
  let setClauses = [
    "email = ?",
    "telephone = ?",
    "fullname = ?",
    "nickname = ?",
    "gender = ?",
    "date_of_birth = ?",
    "id_location_detail = ?",
    "username = ?",
    "is_active = ?",
    "last_update_date = NOW()",
    "last_update_by = ?",
  ];

  let params = [
    email,
    telephone || null,
    fullname,
    nickname,
    gender,
    date_of_birth || null,
    id_location_detail,
    username,
    is_active,
    last_update_by,
  ];

  if (password) {
    setClauses.push("password = ?");
    params.push(password);
  }

  params.push(id_member);

  const SQLQuery = `UPDATE members SET ${setClauses.join(
    ", "
  )} WHERE id_member = ?`;

  return dbPool.execute(SQLQuery, params);
};

export const deleteMembers = (id_member) => {
  const SQLQuery = `DELETE FROM members WHERE id_member = ?`;

  return dbPool.execute(SQLQuery, [id_member]);
};

export const deactivateMemberById = (id_member) => {
  const SQLQuery = `UPDATE members SET is_active = false WHERE id_member = ?`;

  return dbPool.execute(SQLQuery, [id_member]);
};

export const activateMemberById = (id_member) => {
  const SQLQuery = `UPDATE members SET is_active = true WHERE id_member = ?`;

  return dbPool.execute(SQLQuery, [id_member]);
};

export const updateStatusMember = (id_member, status) => {
  const SQLQuery = `UPDATE members SET status = ? WHERE id_member = ?`;

  return dbPool.execute(SQLQuery, [status, id_member]);
};
