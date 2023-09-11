import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientInternalOptions } from 'src/grpc/client/grpc-client.internal.options';
import { findHeroById } from 'src/hero/application/find-hero-by-id.use-case.provider';
import { HeroGrpcServer } from 'src/hero/infrastructure/grpc/server/hero.grpc.server';
import { HeroRest } from 'src/hero/infrastructure/rest/server/hero.rest.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        ...grpcClientInternalOptions,
      },
    ]),
  ],
  controllers: [HeroGrpcServer, HeroRest],
  providers: [...findHeroById.providers],
})
export class HeroModule {}
