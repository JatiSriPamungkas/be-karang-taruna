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
