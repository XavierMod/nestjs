import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';

// Extends an original class -- makes all fields optional by default
export class UpdateEventDto extends PartialType(CreateEventDto) {}
