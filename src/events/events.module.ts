import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './event.entity';
import { EventsController } from './events.controller';

@Module({
  // Makes a repository for the Event entity
  // * Needs to be do it every time
  // The TypeOrmModule will only be available on the EventsController
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [EventsController],
})
export class EventsModule {}
