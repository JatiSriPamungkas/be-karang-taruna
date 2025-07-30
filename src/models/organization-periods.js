import { dbPool } from "../config/database.js";

export const getAllOrganizationPeriods = async () => {
  const SQLQuery = `
    SHOW TABLES`;

  return dbPool.execute(SQLQuery);
};
