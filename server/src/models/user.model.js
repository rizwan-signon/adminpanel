import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      minLength: 3,
      maxLength: 100,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email"],
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      select: false,
    },
    role: {
      type: String,
      enum: ["admin", "manager", "user"],
      default: "user",
    },
    phone: {
      type: String,
      match: [/^\d{10,15}$/, "Phone number is invalid"],
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);
export default User;
