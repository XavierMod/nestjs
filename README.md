Changelog for this branch:

- Includes pipe data validation
- Adding `npm i --save class-validator class-transformer`, which required by some of the pipes used, as it adds new decorators.
- Adding global pipes validation on the `main.js` file
- Adding new decorators on the event entity

# Notes

A pipe is a class annotated with the @Injectable() decorator, which implements the PipeTransform interface.

Pipes have two typical use cases:

- Transformation: transform input data to the desired form (e.g., from string to integer)
- Validation: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception when the data is incorrect

Pipes can be configured in two ways:

- Globally: By editing the main.js file, all pipes will be available to use everywhere
- By group, which will allow to use group pipes.


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
