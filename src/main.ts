import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // Adding which logger options will be displayed on the console
    logger: ['error', 'warn', 'debug'],
  });

  // Enables global pipe validation.
  app.useGlobalPipes(new ValidationPipe());

  // Adding OpenAPI - Swagger
  const config = new DocumentBuilder()
    .setTitle('Events')
    .setDescription('The events API description')
    .setVersion('1.0')
    .addTag('events')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
