import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientInternalOptions } from 'src/grpc/client/grpc-client.internal.options';
import { heroAppProviders } from 'src/hero/application/hero.app.provider';
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
  providers: [heroAppProviders.FindHeroById],
})
export class HeroModule {}
