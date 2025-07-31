import { dbPool } from "../config/database.js";

export const getMonthlyMeetingsDataTable = async (per_page, page, search) => {
  const searchPattern = `%${search}%`;
  const offset = (page - 1) * per_page;

  // const SQLDataQuery = `SELECT * FROM locations WHERE location_name LIKE ? OR description LIKE ? LIMIT ${per_page} OFFSET ${offset};`;

  // const SQLCountQuery = `SELECT COUNT(*) AS total FROM locations WHERE location_name LIKE ? OR description LIKE ?`;

  // const [dataLocation] = await dbPool.execute(SQLDataQuery, [
  //   searchPattern,
  //   searchPattern,
  // ]);
  // const [countLocation] = await dbPool.execute(SQLCountQuery, [
  //   searchPattern,
  //   searchPattern,
  // ]);

  // return {
  //   dataLocation,
  //   countLocation: countLocation[0].total,
  // };
  const SQLQuery = `CREATE TABLE monthly_meetings_sequence (id_sequence INT PRIMARY KEY AUTO_INCREMENT, id_monthly_meeting INT, id_member INT)`;

  return dbPool.execute(SQLQuery);
};

export const getMonthlyMeetingsById = (id_monthly_meeting) => {
  const SQLQuery = `
    SELECT mm.*, m.fullname AS 'hostname'
    FROM montlhy_meetings mm
    LEFT JOIN members m ON m.id_member = mm.host
    WHERE mm.id_monthly_meeting = ?`;

  return dbPool.execute(SQLQuery, [id_monthly_meeting]);
};

export const insertMonthlyMeeting = async (id_member, created_by) => {
  const SQLQuery = `INSERT INTO montlhy_meetings (host, meeting_date, creation_date, created_by)
                    VALUES (?, CURDATE(), NOW(), ?)`;

  const [result] = await dbPool.execute(SQLQuery, [id_member, created_by]);

  const newMeetingId = result.insertId;
  return newMeetingId;
};
