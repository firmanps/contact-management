import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { AppModule } from './app.module';
import { HttpLoggingInterceptor } from './common/logger/http-logging.interceptor';
import { WinstonLogger } from './common/logger/winston.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.getOrThrow<number>('app.port');
  const origin = configService.getOrThrow<string[]>('cors.origins');
  const secret = configService.getOrThrow<string>('app.secret');

  const logger = app.get(WinstonLogger);
  app.useLogger(logger);
  app.useGlobalInterceptors(new HttpLoggingInterceptor(logger));

  app.enableCors({
    origin,
    credentials: true,
  });

  app.use(
    session({
      name: 'sid',
      secret: secret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60,
      },
    }),
  );

  app.setGlobalPrefix('/api');

  await app.listen(port);
}
bootstrap();
