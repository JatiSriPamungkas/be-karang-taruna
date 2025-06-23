import { createMembers, deleteMembers, getMembers, updateMembers } from "../models/members.js";

export const getMember = async (req, res) => {
	const { page, search, status } = req.query;
	const per_page = 10;

	try {
		const [data] = await getMembers(per_page, Number(page), search, status);

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

export const updateMember = async (req, res) => {
	const {
		id_member,
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
		await updateMembers(
			id_member,
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
			message: "PATCH: Success to update members",
			data: {
				id_member,
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
			message: "PATCH: Failed to update members",
			error: err,
		});
	}
};

export const deleteMember = async (req, res) => {
	const { id_member } = req.params;

	try {
		await deleteMembers(id_member);

		res.status(200).json({
			message: "DELETE: Success to delete members",
			data: null,
		});
	} catch (err) {
		res.status(500).json({
			message: "DELETE: Failed to delete members",
			error: err,
		});
	}
};
