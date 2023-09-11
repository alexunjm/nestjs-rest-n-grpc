import { Provider } from '@nestjs/common';
import { HelloWorldDao } from 'src/hello-world/domain/port/dao/hello-world.dao';
import { HelloWorldGrpcClient } from 'src/hello-world/infrastructure/grpc/client/hello-world.grpc.client';

export const helloWorldGrpcClient: { providers: Provider[] } = {
  providers: [
    HelloWorldGrpcClient,
    { provide: HelloWorldDao, useClass: HelloWorldGrpcClient },
  ],
};
