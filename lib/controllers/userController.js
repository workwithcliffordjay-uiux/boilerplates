import * as userService from "@/lib/services/userService.js";

export async function index() {
  return await userService.getUsers();
}

export async function store(data) {
  return await userService.createUser(data);
}