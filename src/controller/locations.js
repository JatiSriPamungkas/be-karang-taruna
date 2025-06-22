import {
	createLocations,
	deleteLocations,
	getLocations,
	updateLocations,
} from "../models/locations.js";

export const getLocation = async (req, res) => {
	const { page, search } = req.query;
	const per_page = 10;

	try {
		const [data] = await getLocations(per_page, Number(page), search);

		res.status(200).json({
			message: "GET: Success to get location",
			data: data,
			meta: {
				page: Number(page),
				per_page,
				total_page: Math.ceil(data.length / per_page),
				total_data: data.length,
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

export const createLocation = async (req, res) => {
	const { location_name, description, created_by, last_update_by } = req.body;

	try {
		await createLocations(location_name, description, created_by, last_update_by);

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
		await updateLocations(id_location, location_name, description, last_update_by);

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
