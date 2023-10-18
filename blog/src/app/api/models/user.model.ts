import { Context } from "@/app/api/graphql/route";

import { User } from "../dto/auth.dto";

class UserModel {
  async createUser(
    username: any,
    email: any,
    password: any,
    context: Context
  ): Promise<User> {
    return await context.prisma.author.create({
      data: {
        username,
        email,
        password,
      },
    });
  }

  async findUserByEmail(email: string, context: Context) {
    return await context.prisma.author.findUnique({
      where: {
        email,
      },
    });
  }
}

export default new UserModel();
