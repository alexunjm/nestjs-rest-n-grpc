import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientInternalOptions } from 'src/grpc/client/grpc-client.internal.options';
import { HeroGrpc } from 'src/hero/hero.grpc.controller';
import { HeroRest } from 'src/hero/hero.rest.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        ...grpcClientInternalOptions,
      },
    ]),
  ],
  controllers: [HeroGrpc, HeroRest],
})
export class HeroModule {}
