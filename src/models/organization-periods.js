import { dbPool } from "../config/database.js";

export const getAllOrganizationPeriods = async () => {
  const SQLQuery = `
    SHOW CREATE TABLE organization_periode`;

  return dbPool.execute(SQLQuery);
};
