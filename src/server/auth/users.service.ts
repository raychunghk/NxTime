import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '.prisma/client';

import * as bcrypt from 'bcryptjs';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: any): Promise<User> {
    let user;
    const hashedPassword = await bcrypt.hash(data.password, 10);
    try {
      const user = await this.prisma.user.create({
        data: {
          ...data,
          password: hashedPassword,
        },
      });
    } catch (error) {
      console.log(error);
    }
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user;
  }

  async getUserWithStaff(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { viewStaff: true },
    });

    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }

    return user;
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return user;
  }

  async updateUser(id: string, data: any): Promise<User> {
    const user = await this.prisma.user.update({ where: { id }, data });
    return user;
  }

  async deleteUser(id: string): Promise<User> {
    const user = await this.prisma.user.delete({ where: { id } });
    return user;
  }

  async findUserByIdentifier(identifier: string): Promise<User | null> {
    let user: User | null = null;

    if (identifier.includes('@')) {
      user = await this.prisma.user.findUnique({
        where: { email: identifier },
      });
    } else {
      user = await this.prisma.user.findUnique({
        where: { username: identifier },
      });
    }
    return user;
  }
}
