import jwt from "jsonwebtoken";

export const verifyAuth = (req: any, res: any, next: any) => {

	const token = req.headers.authorization;

	if (!token)
		return res
			.status(401)
			.send("Access denied. No token provided.");

	try {
		const verified = jwt.verify(
			token,
			process.env.TOKEN_SECRET as string
		);
		req.user = verified;
		next();
	} catch (err) {
		res.status(400).send("Invalid token.");
	}
};
