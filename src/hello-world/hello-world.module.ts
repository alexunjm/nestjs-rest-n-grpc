import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientExternalOptions } from 'src/grpc/client/grpc-client.external.options';
import { sayHelloUseCase } from 'src/hello-world/application/say-hello.use-case.provider';
import { helloWorldGrpcClient } from 'src/hello-world/infrastructure/grpc/client/hello-world.grpc.client.provider';
import { HelloWorldRest } from 'src/hello-world/infrastructure/rest/server/hello-world.rest.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HELLO_PACKAGE',
        ...grpcClientExternalOptions,
      },
    ]),
  ],
  controllers: [HelloWorldRest],
  providers: [...helloWorldGrpcClient.providers, ...sayHelloUseCase.providers],
})
export class HelloWorldModule {}
