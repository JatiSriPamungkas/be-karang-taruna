import { dbPool } from "../config/database.js";

export const getAllOrganizationPeriods = async () => {
  const SQLQuery = `
    SELECT * FROM organization_periode`;

  return dbPool.execute(SQLQuery);
};

export const insertOrganizationPeriod = (
  start_period,
  end_period,
  description,
  created_by
) => {
  const SQLQuery = `
    INSERT INTO organization_periode (
      start_periode,
      end_periode,
      description,
      creation_date,
      created_by) 
    VALUES (?, ?, ?, NOW(), ?)`;

  return dbPool.execute(SQLQuery, [
    start_period,
    end_period,
    description,
    created_by,
  ]);
};
