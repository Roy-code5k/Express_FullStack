import { User } from "../models/user.model.js";

export const healthCheck = (req, res) => {
    try {
        const requestTime = Date.now();
        const ip = req.ip;
        const path = req.path;
        res.status(200).json({
            message: "Sample route",
            requestTime,
            ip,
            path
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}

export const landingPage = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).render("sample", { users });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}
 
export const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.redirect("/app/v1/landing");
    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating user');
    }
}


