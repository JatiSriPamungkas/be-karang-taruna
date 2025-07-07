import {
  getOrganizationPositionsDataTable,
  getOrganizationPositionById,
  createOrganizationPosition,
  deleteOrganizationPosition,
  updateOrganizationPosition,
} from "../models/organization-positions.js";

export const getOrganizationPositions = async (req, res) => {
  const { page, search } = req.query;
  const per_page = 10;

  try {
    const { dataOrganizationPositions, countOrganizationPositions } =
      await getOrganizationPositionsDataTable(per_page, Number(page), search);

    res.status(200).json({
      message: "GET: Success to get Organization Positions",
      data: dataOrganizationPositions,
      meta: {
        page: Number(page),
        per_page,
        total_page: Math.ceil(countOrganizationPositions / per_page),
        total_data: countOrganizationPositions,
        search,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "GET: Failed to get Organization Positions",
      error: err,
    });
  }
};

export const getOrganizationPositionDataById = async (req, res) => {
  const { id_organization_position } = req.params;

  try {
    const [data] = await getOrganizationPositionById(id_organization_position);

    res.status(200).json({
      message: "GET: Success to get organization position by id",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: "GET: Failed to get organization position by id",
      error: err,
    });
  }
};

export const insertOrganizationPosition = async (req, res) => {
  const { position_name, description, created_by, last_update_by } = req.body;

  try {
    await createOrganizationPosition(
      position_name,
      description,
      created_by,
      last_update_by
    );

    res.status(200).json({
      message: "POST: Success to create organization position",
      data: {
        position_name,
        description,
        created_by,
        last_update_by,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "POST: Failed to create organization position",
      error: err,
    });
  }
};

export const dropOrganizationPosition = async (req, res) => {
  const { id_organization_position } = req.params;

  try {
    await deleteOrganizationPosition(id_organization_position);

    res.status(200).json({
      message: "DELETE: Success to delete organization position",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      message: "DELETE: Failed to delete organization position",
      error: err,
    });
  }
};

export const patchOrganizationPosition = async (req, res) => {
  const {
    id_organization_position,
    position_name,
    description,
    last_update_by,
  } = req.body;

  try {
    await updateOrganizationPosition(
      id_organization_position,
      position_name,
      description,
      last_update_by
    );

    res.status(200).json({
      message: "PATCH: Success to update organization position",
      data: {
        id_organization_position,
        position_name,
        description,
        last_update_by,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "PATCH: Failed to update organization position",
      error: err,
    });
  }
};
