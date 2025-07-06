import { dbPool } from "../config/database.js";

export const getOrganizationPositionsDataTable = async (
  per_page = 10,
  page = 1,
  search
) => {
  const searchPattern = `%${search}%`;
  const offset = (page - 1) * per_page;

  const SQLDataQuery = `
    SELECT *
    FROM organization_positions
    WHERE name LIKE ? OR description LIKE ?
    LIMIT ${per_page} OFFSET ${offset};`;

  const [dataOrganizationPositions] = await dbPool.execute(SQLDataQuery, [
    searchPattern,
    searchPattern,
  ]);

  const SQLCountQuery = `
  SELECT COUNT(*) AS total
  FROM organization_positions
  WHERE name LIKE ? OR description LIKE ?;`;

  const [countOrganizationPositions] = await dbPool.execute(SQLCountQuery, [
    searchPattern,
    searchPattern,
  ]);

  return {
    dataOrganizationPositions,
    countOrganizationPositions: countOrganizationPositions[0].total,
  };
};

export const createOrganizationPosition = (
  position_name,
  description,
  created_by,
  last_update_by
) => {
  const SQLQuery = `
    INSERT INTO organization_positions (
      name,
      description,
      creation_date,
      created_by,
      last_update_date,
      last_update_by) 
    VALUES (?, ?, NOW(), ?, NOW(), ?)`;

  return dbPool.execute(SQLQuery, [
    position_name,
    description,
    created_by,
    last_update_by,
  ]);
};
