import { insertPosition } from "../models/organization-structure.js";

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
