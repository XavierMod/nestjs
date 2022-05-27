/** A data transfer object (DTO) is an object that carries data between processes. It's a technique to facilitate communication between two systems (like an API -> server) without potentially exposing sensitive information */
export class CreateEventDto {
  // A question mark makes the field optional
  name: string;
  description: string;
  when: string;
  address: string;
}
