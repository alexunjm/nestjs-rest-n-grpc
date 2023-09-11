import { Provider } from '@nestjs/common';
import { HelloWorldExternal } from 'src/hello-world/application/hello-world.external';
import {
  SayHelloCommand,
  SayHelloUseCase,
} from 'src/hello-world/application/say-hello.use-case';
import { HelloWorldGrpc } from 'src/hello-world/hello-world.remote.grpc';

export const helloWorldAppProviders: { [key: string]: Provider } = {
  SayHello: {
    provide: SayHelloCommand,
    useFactory: (externalGrpc: HelloWorldGrpc) =>
      new SayHelloUseCase(externalGrpc),
    // inject: [HelloWorldGrpc],
    inject: [HelloWorldExternal],
  },
};
