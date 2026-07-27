import { prisma } from "@/lib/prisma";

export async function getUsers() {
  return prisma.user.findMany();
}

export async function createUser(data) {
  return prisma.user.create({
    data,
  });
}