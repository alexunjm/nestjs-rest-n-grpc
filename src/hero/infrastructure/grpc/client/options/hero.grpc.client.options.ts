import { ClientOptions, Transport } from '@nestjs/microservices';
import { heroProtoPath } from 'src/proto/hero/proto.path';

export const heroGrpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    protoPath: heroProtoPath,
  },
};
