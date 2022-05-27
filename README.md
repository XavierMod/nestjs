Changelog for this branch:

- Docker has been implemented
- Created a new `nest-events` database
- Added `npm i --save @nestjs/typeorm typeorm mysql`
- Implemented an sql database
- Expanding entities and adding generic and specific repositories
- Adding sql data
- Using TypeORM options to create a somewhat complex query

# Notes

## Nest JS
Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

Under the hood, Nest makes use of robust HTTP Server frameworks like Express (the default) and optionally can be configured to use Fastify as well!

## Controllers

Controllers are responsible for handling incoming requests and returning responses to the client.

A controller's purpose is to receive specific requests for the application. The routing mechanism controls which controller receives which requests. Frequently, each controller has more than one route, and different routes can perform different actions.

## TypeORM

TypeORM is a TypeScript ORM (object-relational mapper) library that makes it easy to link your TypeScript application up to a relational database database. TypeORM supports MySQL, SQlite, Postgres, MS SQL Server, and a host of other traditional options.
## Repository

The Repository Design Pattern Mediates between the domain and the data mapping layers using a collection-like interface for accessing the domain objects. In other words, we can say that a Repository Design Pattern acts as a middleman or middle layer between the rest of the application and the data access logic.

The TypeORM supports the repository design pattern, thus each entity has its own Repository. These repositories can be obtained from the database connection.

The database connection is asynchronous, but Nest makes this process completely invisible for the end-user. The PhotoRepository is waiting for the db connection, and the PhotoService is delayed until repository is ready to use. The entire application can start when each class is instantiated.


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
