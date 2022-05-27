/**
 * An entity is a lightweight persistence domain object. Typically, an entity represents a table in a relational database, and each entity instance corresponds to a row in that table. The primary programming artifact of an entity is the entity class, although entities can use helper classes.
 */

// * Entities are tables in the DB

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// All entities must have a defined decorator
@Entity('event')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  // All entity properties must have a column decorator

  @Column('varchar', { length: 100 })
  name: string;

  @Column()
  description: string;

  // the name prop changes the column name
  @Column({ name: 'when_date' })
  when: Date;

  @Column()
  address: string;
}
