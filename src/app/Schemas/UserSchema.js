import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        password_hash: String
    },
    {
        timestamps: true
    }
);

export default mongoose.model("User", UserSchema);
