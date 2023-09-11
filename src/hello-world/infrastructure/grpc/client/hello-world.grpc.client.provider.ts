import { Provider } from '@nestjs/common';
import { HelloWorldExternal } from 'src/hello-world/application/hello-world.external';
import { HelloWorldGrpcClient } from 'src/hello-world/infrastructure/grpc/client/hello-world.grpc.client';

export const helloWorldGrpcClient: { providers: Provider[] } = {
  providers: [
    HelloWorldGrpcClient,
    { provide: HelloWorldExternal, useClass: HelloWorldGrpcClient },
  ],
};
