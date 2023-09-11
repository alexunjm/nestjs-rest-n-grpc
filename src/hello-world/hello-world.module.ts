import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientExternalOptions } from 'src/grpc/client/grpc-client.external.options';
import { helloWorldAppProviders } from 'src/hello-world/application/hello-world.app.provider';
import { HelloWorldRest } from 'src/hello-world/hello-world.rest.controller';
import { helloWorldInfraProviders } from 'src/hello-world/provider/hello-world.infra.provider';

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
  providers: [
    ...helloWorldInfraProviders.SayHello,
    helloWorldAppProviders.SayHello,
  ],
})
export class HelloWorldModule {}
