import { IsDateString, IsString, Length } from 'class-validator';

/** A data transfer object (DTO) is an object that carries data between processes. It's a technique to facilitate communication between two systems (like an API -> server) without potentially exposing sensitive information */
export class CreateEventDto {
  // A question mark makes the field optional

  // * Decorators coming from class-validator, when pipes were added.
  @IsString()
  @Length(5, 255, { message: 'Custom error message' })
  name: string;

  @Length(5, 255)
  description: string;

  @IsDateString()
  when: string;

  //                  Example how to use group pipe validation
  @Length(5, 255 /** { groups: ['create'] } */)
  @Length(10, 255 /** { groups: ['update'] } */)
  address: string;
}
