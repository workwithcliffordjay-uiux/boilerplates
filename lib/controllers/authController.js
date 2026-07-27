import { NextResponse } from "next/server";
import * as authService from "@/lib/services/authService";

export async function register(request) {
  try {
    const body = await request.json();

    const user = await authService.register(body);

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 400 }
    );
  }
}

export async function login(request) {
  try {
    const body = await request.json();

    const { token, user } = await authService.login(body);

    const response = NextResponse.json({
      message: "Login successful.",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 401,
      }
    );
  }
}