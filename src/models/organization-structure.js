import { dbPool } from "../config/database.js";

export const insertPosition = (
  id_organization_position,
  id_organization_period,
  created_by
) => {
  const SQLQuery = `
    INSERT INTO organization_structure (
      id_organization_position,
      id_organization_periode,
      creation_date,
      created_by) 
    VALUES (?, ?, NOW(), ?)`;

  return dbPool.execute(SQLQuery, [
    id_organization_position,
    id_organization_period,
    created_by,
  ]);
};
