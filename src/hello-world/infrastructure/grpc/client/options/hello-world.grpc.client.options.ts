import { ClientOptions, Transport } from '@nestjs/microservices';
import { helloWorldProtoPath } from 'src/hello-world/infrastructure/grpc/proto/proto.path';

export const helloWorldGrpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'helloworld',
    url: 'localhost:50051',
    protoPath: helloWorldProtoPath,
  },
};
