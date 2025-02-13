import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class KafkaProducerService implements OnModuleInit {
  private topic: string;

  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
    private readonly configService: ConfigService,
  ) {
    this.topic = this.configService.get<string>('kafka.topic') || 'default-topic';
  }

  onModuleInit() {
    this.kafkaClient.connect(); // Ensures the Kafka client is connected
  }

  async sendMessage(key: string, value: any) {
    console.log(`🚀 Sending message to topic: ${this.topic}`);
    await this.kafkaClient.emit(this.topic, { key, value }).toPromise();
  }
}