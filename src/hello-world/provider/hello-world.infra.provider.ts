import { Provider } from '@nestjs/common';
import { HelloWorldExternal } from 'src/hello-world/application/hello-world.external';
import { HelloWorldGrpc } from 'src/hello-world/hello-world.remote.grpc';

export const helloWorldInfraProviders: { [key: string]: Provider[] } = {
  SayHello: [
    HelloWorldGrpc,
    { provide: HelloWorldExternal, useClass: HelloWorldGrpc },
  ],
};
