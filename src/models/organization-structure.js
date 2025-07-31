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
  const SQLQuery = `
    SELECT os.*, op.name
    FROM organization_structure os
    LEFT JOIN organization_positions op ON op.id_organization_position = os.id_organization_position
    WHERE os.id_organization_periode = ?
    ORDER BY op.id_organization_position ASC`;

  return dbPool.execute(SQLQuery, [id_organization_period]);
};

export const updateStructureMember = (
  id_organization_structure,
  id_member,
  last_update_by
) => {
  const SQLQuery = `
    UPDATE organization_structure
    SET id_member = ?,
      last_update_date = NOW(),
      last_update_by = ?
    WHERE id_organization_structure = ?`;

  return dbPool.execute(SQLQuery, [
    id_member,
    last_update_by,
    id_organization_structure,
  ]);
};

export const deleteStructureFromPeriod = (id_organization_structure) => {
  const SQLQuery = `DELETE FROM organization_structure WHERE id_organization_structure = ?`;

  return dbPool.execute(SQLQuery, [id_organization_structure]);
};
