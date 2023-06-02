import { NextResponse } from "next/server";
import posts from "./posts.json";

export async function GET(request) {
  return NextResponse.json(posts);
}
