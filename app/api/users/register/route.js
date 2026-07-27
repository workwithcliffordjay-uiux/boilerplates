import { register } from "@/lib/controllers/authController";

export async function POST(request) {
  return register(request);
}