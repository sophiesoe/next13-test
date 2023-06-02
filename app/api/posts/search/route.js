import { NextResponse } from "next/server";
import posts from "../posts.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filteredPosts);
}
