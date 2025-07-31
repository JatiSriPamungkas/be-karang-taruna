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
  const SQLQuery = `ALTER TABLE montlhy_meetings
ADD COLUMN is_finish BOOLEAN;`;

  return dbPool.execute(SQLQuery);
};

export const insertMonthlyMeeting = (id_member, created_by) => {
  const SQLQuery = `INSERT INTO montlhy_meetings (host, meeting_date, creation_date, created_by)
                    VALUES (?, CURDATE(), NOW(), ?)`;
  return dbPool.execute(SQLQuery, [id_member, created_by]);
};
