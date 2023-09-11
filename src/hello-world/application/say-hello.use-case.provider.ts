import { Provider } from '@nestjs/common';
import { SayHelloUseCase } from 'src/hello-world/application/say-hello.use-case';
import { SayHelloCommand } from 'src/hello-world/domain/port/command/say-hello.command';
import { HelloWorldDao } from 'src/hello-world/domain/port/dao/hello-world.dao';

export const sayHelloUseCase: { providers: Provider[] } = {
  providers: [
    {
      provide: SayHelloCommand,
      useFactory: (externalGrpcClient: HelloWorldDao) =>
        new SayHelloUseCase(externalGrpcClient),
      inject: [HelloWorldDao],
    },
  ],
};
