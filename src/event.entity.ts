/**
 * An entity is a lightweight persistence domain object. Typically, an entity represents a table in a relational database, and each entity instance corresponds to a row in that table. The primary programming artifact of an entity is the entity class, although entities can use helper classes.
 */

export class Event {
  id: number;
  name: string;
  description: string;
  when: Date;
  address: string;
}
