import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientExternalOptions } from 'src/grpc/client/grpc-client.external.options';
import { HelloWorldRest } from 'src/hello-world/hello-world.rest.controller';

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
})
export class HelloWorldModule {}
