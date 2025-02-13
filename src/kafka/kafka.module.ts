import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { KafkaProducerService } from './kafka-producer.service';
import { KafkaController } from './kafka.controller';

@Module({
  imports: [
    ConfigModule,
    ClientsModule.registerAsync([
      {
        name: 'KAFKA_SERVICE',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => {
          // Ensure default values to avoid 'undefined' errors
          const clientId = configService.get<string>('KAFKA_CLIENT_ID', 'default-client');
          const broker = configService.get<string>('KAFKA_BROKER', 'localhost:9092');
          const groupId = configService.get<string>('KAFKA_GROUP_ID', 'default-group');

          return {
            transport: Transport.KAFKA,
            options: {
              client: {
                clientId,
                brokers: [broker],  // ✅ Ensures it's always a valid string[]
              },
              consumer: {
                groupId,
              },
            },
          };
        },
      },
    ]),
  ],
  providers: [KafkaProducerService],
  controllers: [KafkaController],
  exports: [KafkaProducerService],
})
export class KafkaModule {}