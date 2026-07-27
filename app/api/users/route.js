import { NextResponse } from "next/server";
import { index, store } from "@/lib/controllers/userController";

export async function GET() {
  const users = await index();
  return NextResponse.json(users);
}

export async function POST(request) {
  const body = await request.json();
  const user = await store(body);

  return NextResponse.json(user, { status: 201 });
}