import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
const registerUser = async (req, res, next) => {
  try {
    const { fullName, email, password, phone } = req.body;

    if (!fullName || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const newUser = await User.create({
      fullName,
      email,
      password: hashPassword,
      phone,
    });

    res.json({ message: "User registered successfully", userId: newUser._id });
  } catch (error) {
    next(error);
  }
};

export { registerUser };
