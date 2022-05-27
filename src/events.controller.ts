import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';
import { Event } from './event.entity';
import { UpdateEventDto } from './update-event.dto';
import { v4 as uuidv4 } from 'uuid';

// Controllers should always be as simple as possible
@Controller('/events')
export class EventsController {
  // There's no database, so events will be stored in memory
  // Imports the Event class
  private events: Event[] = [];
  // Decorators specity the HTTP verb/path of the operation
  @Get()
  findAll() {
    return this.events;
  }

  @Get(':id')
  findOne(@Param('id') id) {
    const event = this.events.find((event) => {
      // the id gets always converted to a number
      return event.id === id;
    });
    return event;
  }

  @Post()
  create(@Body() input: CreateEventDto) {
    // Because CreateEvent is now a Dto, its internal properties are now available
    // e.g. input.name
    const event = {
      ...input,
      when: new Date(input.when),
      id: uuidv4(),
    };
    this.events.push(event);
    return event;
  }

  @Patch()
  update(@Param('id') id, @Body() input: UpdateEventDto) {
    // All the properties will be optional, because it's using a PartialType
    const index = this.events.findIndex((event) => event.id === parseInt(id));

    this.events[index] = {
      ...this.events[index],
      ...input,
      when: input.when ? new Date(input.when) : this.events[index].when,
    };
    return this.events[index];
  }

  @Delete(':id')
  // Changing the returned status code
  @HttpCode(204)
  remove(@Param('id') id, @Body() input) {
    this.events = this.events.filter((event) => event.id !== parseInt(id));
  }
}
