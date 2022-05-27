Changelog for this branch:

- Creating a custom module with `nest generate module events`
- Reorganizing directory into different folders/modules
- Adding providers

# Notes

### Dependency Injection

In software engineering, dependency injection is a design pattern in which an object receives other objects that it depends on. A form of inversion of control, dependency injection aims to separate the concerns of constructing objects and using them, leading to loosely coupled programs

Code is decoupled, which makes testing easier. The app's module can import other modules, and have controller registration. Providers are classes that use dependency injection. 

### Providers

Providers are a fundamental concept in Nest. Many of the basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on. The main idea of a provider is that it can be injected as a dependency; this means objects can create various relationships with each other, and the function of "wiring up" instances of objects can largely be delegated to the Nest runtime system.

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
