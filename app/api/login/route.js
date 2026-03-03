import connectDB from "../../../lib/mongodb";
import User from "../../../models/User";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 400,
      });
    }

    if (user.password !== password) {
      return new Response(JSON.stringify({ message: "Invalid password" }), {
        status: 400,
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return new Response(
      JSON.stringify({ message: "Login successful", token }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
}
