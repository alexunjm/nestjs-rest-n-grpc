import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from 'src/app.module';
import { heroGrpcClientOptions } from 'src/hero/infrastructure/grpc/client/options/hero.grpc.client.options';

async function bootstrap() {
  /**
   * This example contains a hybrid application (HTTP + gRPC)
   * You can switch to a microservice with NestFactory.createMicroservice() as follows:
   *
   * const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
   *  transport: Transport.GRPC,
   *  options: {
   *    package: 'hero',
   *    protoPath: join(__dirname, './hero/hero.proto'),
   *  }
   * });
   * await app.listen();
   *
   */
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(heroGrpcClientOptions);

  await app.startAllMicroservices();
  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
