import { createMembers, getMembers } from "../models/members.js";

export const getMember = async (req, res) => {
	const { page, search } = req.query;
	const per_page = 10;

	try {
		const [data] = await getMembers(per_page, Number(page), search);

		res.status(200).json({
			message: "GET: Success to get members",
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
			message: "GET: Failed to get members",
			error: err,
		});
	}
};

export const createMember = async (req, res) => {
	const {
		email,
		telephone,
		fullname,
		nickname,
		gender,
		date_of_birth,
		id_location_detail,
		username,
		password,
		is_active,
		status,
		created_by,
		last_update_by,
	} = req.body;

	try {
		await createMembers(
			email,
			telephone,
			fullname,
			nickname,
			gender,
			date_of_birth,
			id_location_detail,
			username,
			password,
			is_active,
			status,
			created_by,
			last_update_by
		);

		res.status(200).json({
			message: "POST: Success to create members",
			data: {
				email,
				telephone,
				fullname,
				nickname,
				gender,
				date_of_birth,
				id_location_detail,
				username,
				password,
				is_active,
				status,
				created_by,
				last_update_by,
			},
		});
	} catch (err) {
		res.status(500).json({
			message: "POST: Failed to create members",
			error: err,
		});
	}
};
