import {
  insertPosition,
  getOrganizationPositionByPeriod,
  updateStructureMember,
  deleteStructureFromPeriod
} from "../models/organization-structure.js";

export const addPosition = async (req, res) => {
  const { id_organization_position, id_organization_period, created_by } =
    req.body;

  try {
    await insertPosition(
      id_organization_position,
      id_organization_period,
      created_by
    );

    res.status(200).json({
      message: "POST: Success to add organization position to period",
      data: {
        id_organization_position,
        id_organization_period,
        created_by,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "POST: Failed to add organization position to period" + err,
      error: err,
    });
  }
};

export const getPositionsByPeriod = async (req, res) => {
  const { id_organization_period } = req.params;

  try {
    const [data] = await getOrganizationPositionByPeriod(
      id_organization_period
    );

    if (data.length > 0) {
      res.status(200).json({
        message: "GET: Success to get organization position by period",
        data: data,
      });
    } else {
      res.status(404).json({
        message: `Not Found: Organization position with period ${id_organization_period} not found!`,
        data: data,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "GET: Failed to get organization position by period" + err,
      error: err,
    });
  }
};

export const setPositionMember = async (req, res) => {
  const { id_organization_structure, id_member, last_update_by } = req.body;

  try {
    await updateStructureMember(
      id_organization_structure,
      id_member,
      last_update_by
    );

    res.status(200).json({
      message: "POST: Success to select member to structure",
      data: {
        id_organization_structure,
        id_member,
        last_update_by,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "POST: Failed to select member to structure" + err,
      error: err,
    });
  }
};

export const deleteStructure = async (req, res) => {
  const { id_organization_structure } = req.params;

  try {
    await deleteStructureFromPeriod(id_organization_structure);

    res.status(200).json({
      message: "DELETE: Success to delete organization structure!",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      message: "DELETE: Failed to delete organization structure!",
      error: err,
    });
  }
};
