import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientInternalOptions } from 'src/grpc/client/grpc-client.internal.options';
import { heroProviders } from 'src/hero/application/hero.provider';
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
  providers: [heroProviders.FindHeroById],
})
export class HeroModule {}
