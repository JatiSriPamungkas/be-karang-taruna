import {
  createLocations,
  deleteLocations,
  getAllLocations,
  getLocations,
  getLocationsById,
  updateLocations,
} from "../models/locations.js";

export const getLocation = async (req, res) => {
  const { page, search } = req.query;
  const per_page = 10;

  try {
    const { dataLocation, countLocation } = await getLocations(
      per_page,
      Number(page),
      search
    );

    res.status(200).json({
      message: "GET: Success to get location",
      data: dataLocation,
      meta: {
        page: Number(page),
        per_page,
        total_page: Math.ceil(countLocation / per_page),
        total_data: countLocation,
        search,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "GET: Failed to get location",
      error: err,
    });
  }
};

export const getLocationById = async (req, res) => {
  const { id_location } = req.params;

  try {
    const [data] = await getLocationsById(id_location);

    res.status(200).json({
      message: "GET: Success to get location by id",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: "GET: Failed to get location by id",
      error: err,
    });
  }
};

export const getAllLocation = async (req, res) => {
  try {
    const [data] = await getAllLocations();

    res.status(200).json({
      message: "GET: Success to get all location",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: "GET: Failed to get all location",
      error: err,
    });
  }
};

export const createLocation = async (req, res) => {
  const { location_name, description, created_by, last_update_by } = req.body;

  try {
    await createLocations(
      location_name,
      description,
      created_by,
      last_update_by
    );

    res.status(200).json({
      message: "POST: Success to create location",
      data: {
        location_name,
        description,
        created_by,
        last_update_by,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "POST: Failed to create location",
      error: err,
    });
  }
};

export const updateLocation = async (req, res) => {
  const { id_location, location_name, description, last_update_by } = req.body;

  try {
    await updateLocations(
      id_location,
      location_name,
      description,
      last_update_by
    );

    res.status(200).json({
      message: "PATCH: Success to update location",
      data: {
        id_location,
        location_name,
        description,
        last_update_by,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "PATCH: Failed to update location",
      error: err,
    });
  }
};

export const deleteLocation = async (req, res) => {
  const { id_location } = req.params;

  try {
    await deleteLocations(id_location);

    res.status(200).json({
      message: "DELETE: Success to delete location",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      message: "DELETE: Failed to delete location",
      error: err,
    });
  }
};
