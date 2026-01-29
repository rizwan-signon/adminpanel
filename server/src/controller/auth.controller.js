import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, phone } = req.body;
    console.log(typeof phone);
    const hashPassword = await bcryptjs.hash(password, 10);
    const newUser = await User.create({
      fullName,
      email,
      password: hashPassword,
      phone,
    });

    res.json({ message: "User registered successfully", userId: newUser._id });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export { registerUser };
