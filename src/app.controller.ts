import { Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async reate() {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'Voce tem uma nova solicitacao de amizade',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}
