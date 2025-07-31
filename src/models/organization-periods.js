import { dbPool } from "../config/database.js";

export const getAllOrganizationPeriods = async () => {
  const SQLQuery = `
    SELECT * FROM organization_periode ORDER BY start_periode DESC`;

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

export const updateOrganizationPeriod = (
  id_organization_period,
  start_period,
  end_period,
  description,
  last_update_by
) => {
  const SQLQuery = `
    UPDATE organization_periode
    SET start_periode = ?,
      end_periode = ?,
      description = ?,
      last_update_date = NOW(),
      last_update_by = ?
    WHERE id_organization_position = ?`;

  return dbPool.execute(SQLQuery, [
    start_period,
    end_period,
    description,
    last_update_by,
    id_organization_period,
  ]);
};
