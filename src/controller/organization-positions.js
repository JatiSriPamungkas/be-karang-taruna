import {
  getOrganizationPositionsDataTable,
  createOrganizationPosition,
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
