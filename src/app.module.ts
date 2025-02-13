import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ConfigModule } from '@nestjs/config';
import kafkaConfig from '../config/kafka.config';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [kafkaConfig],  // Load Kafka Configurations
    }),
    KafkaModule,
  ],
  controllers: [AppController, ItemsController],
  providers: [AppService],
})
export class AppModule {}
