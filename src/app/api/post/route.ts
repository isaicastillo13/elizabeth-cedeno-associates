import { NextResponse } from "next/server";
import connectDB from "@/backend/lib/mongodb";
import Post from "@/backend/models/Post";

export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find({ published: true });
    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al obtener artículos" }, { status: 500 });
  }
}
