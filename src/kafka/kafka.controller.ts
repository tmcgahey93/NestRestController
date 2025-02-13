import { Controller, Get, Param } from '@nestjs/common';
import { KafkaProducerService } from './kafka-producer.service';

@Controller('kafka')
export class KafkaController {
  constructor(private readonly kafkaProducerService: KafkaProducerService) {}

  @Get('send/:message')
  async sendMessage(@Param('message') message: string) {
    await this.kafkaProducerService.sendMessage('key1', { text: message });
    return { success: true, message: `Message sent: ${message}` };
  }
}