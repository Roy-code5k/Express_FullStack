import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true
    }
})


// Exporting the User model
export const User = model("User", userSchema);

