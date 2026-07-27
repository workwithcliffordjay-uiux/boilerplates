import { login } from "@/lib/controllers/authController";

export async function POST(request) {
  return login(request);
}