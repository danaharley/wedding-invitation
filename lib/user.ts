import { User } from "@/app/generated/prisma";
import prisma from "./prisma";

export const getUsers = async (): Promise<User[] | null> => {
  try {
    const users = await prisma.user.findMany();

    return users;
  } catch (error) {
    console.log("GET_USERS", error);
    return null;
  }
};

export const getUserByGroup = async (
  group: string,
  name: string,
): Promise<User | null> => {
  try {
    if (!group || !name) {
      return null;
    }

    const user = await prisma.user.findFirst({
      where: {
        group: group.toLowerCase(),
        name: {
          equals: name,
          mode: "insensitive",
        },
      },
    });

    return user;
  } catch (error) {
    console.log("GET_USER_BY_ID", error);
    return null;
  }
};

export const getUserById = async (userId: number): Promise<User | null> => {
  try {
    const user = await prisma.user.findFirst({ where: { id: userId } });

    return user;
  } catch (error) {
    console.log("GET_USER_BY_ID", error);
    return null;
  }
};
