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

export const getOrganizationPositionByPeriod = (id_organization_period) => {
  // const SQLQuery = `
  //   SELECT os.*, op.name
  //   FROM organization_structure os
  //   LEFT JOIN organization_positions op ON op.id_organization_position = os.id_organization_position
  //   WHERE os.id_organization_periode = ?`;

  // return dbPool.execute(SQLQuery, [id_organization_period]);
  const SQLQuery = `
    ALTER TABLE organization_structure MODIFY COLUMN id_member INT DEFAULT NULL;`;

  return dbPool.execute(SQLQuery);
};
