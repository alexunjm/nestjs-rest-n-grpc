import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { sayHelloUseCase } from 'src/hello-world/application/say-hello.use-case.provider';
import { helloWorldGrpcClient } from 'src/hello-world/infrastructure/grpc/client/hello-world.grpc.client.provider';
import { helloWorldGrpcClientOptions } from 'src/hello-world/infrastructure/grpc/client/options/hello-world.grpc.client.options';
import { HelloWorldRest } from 'src/hello-world/infrastructure/rest/server/hello-world.rest.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HELLO_PACKAGE',
        ...helloWorldGrpcClientOptions,
      },
    ]),
  ],
  controllers: [HelloWorldRest],
  providers: [...helloWorldGrpcClient.providers, ...sayHelloUseCase.providers],
})
export class HelloWorldModule {}
