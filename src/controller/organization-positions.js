import { getOrganizationPositionsDataTable } from "../models/organization-positions.js";

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
