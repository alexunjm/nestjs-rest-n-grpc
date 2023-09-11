import { Provider } from '@nestjs/common';
import { HelloWorldExternal } from 'src/hello-world/application/hello-world.external';
import {
  SayHelloCommand,
  SayHelloUseCase,
} from 'src/hello-world/application/say-hello.use-case';

export const sayHelloUseCase: { providers: Provider[] } = {
  providers: [
    {
      provide: SayHelloCommand,
      useFactory: (externalGrpcClient: HelloWorldExternal) =>
        new SayHelloUseCase(externalGrpcClient),
      inject: [HelloWorldExternal],
    },
  ],
};
