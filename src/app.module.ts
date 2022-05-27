import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './events/event.entity';
import { EventsModule } from './events/events.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules are boxes with specific tools. They divide app in several pieces.

@Module({
  imports: [
    // Using the TypeORM module
    /**
     * Object–relational mapping in computer science is a programming technique for converting data between type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language.
     * For integrating with SQL and NoSQL databases, Nest provides the @nestjs/typeorm package. Nest uses TypeORM because it's the most mature Object Relational Mapper (ORM) available for TypeScript. Since it's written in TypeScript, it integrates well with the Nest framework.
     */
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'example',
      database: 'nest-events',
      // Contains all entities from the project
      entities: [Event],
      // Synchronize automatically updates the DB schema when changing entities.
      // ! Should not be true in prod
      synchronize: true,
    }),
    EventsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APP_NAME',
      useValue: 'Nest Events Backend',
    },
  ],
})
export class AppModule {}
