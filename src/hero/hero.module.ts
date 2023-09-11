import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { findHeroById } from 'src/hero/application/find-hero-by-id.use-case.provider';
import { heroGrpcClientOptions } from 'src/hero/infrastructure/grpc/client/options/hero.grpc.client.options';
import { HeroGrpcServer } from 'src/hero/infrastructure/grpc/server/hero.grpc.server';
import { HeroRest } from 'src/hero/infrastructure/rest/server/hero.rest.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        ...heroGrpcClientOptions,
      },
    ]),
  ],
  controllers: [HeroGrpcServer, HeroRest],
  providers: [...findHeroById.providers],
})
export class HeroModule {}
