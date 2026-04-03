import { User } from "../models/user.model.js";

export const seedUserData = async () => {
    try {
        const existingUser = await User.findOne({ email: "hello@gmail.com" });
        if (!existingUser) {
            const newUser = new User({
                username: "Hrituraj",
                email: "hello@gmail.com",
                password: "1234"
            });
            await newUser.save();
            console.log("Hardcoded seed data inserted.");
        } else {
            console.log("Seed data already exists.");
        }
    } catch (error) {
        console.error("Error seeding user data:", error);
    }
}
