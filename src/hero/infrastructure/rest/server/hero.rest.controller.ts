import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, ReplaySubject } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { HeroByIdRequest } from 'src/hero/infrastructure/grpc/proto/interfaces/hero-by-id.request';
import { Hero } from 'src/hero/infrastructure/grpc/proto/interfaces/hero.interface';
import { HeroResponse } from 'src/hero/infrastructure/grpc/proto/interfaces/hero.response';

@Controller('rest/hero')
export class HeroRest implements OnModuleInit {
  private heroService: Hero;

  constructor(@Inject('HERO_PACKAGE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.heroService = this.client.getService<Hero>('Hero');
  }

  @Get()
  getMany(): Observable<HeroResponse[]> {
    const ids$ = new ReplaySubject<HeroByIdRequest>();
    ids$.next({ id: 1 });
    ids$.next({ id: 2 });
    ids$.complete();

    const stream = this.heroService.findMany(ids$.asObservable());
    return stream.pipe(toArray());
  }

  @Get(':id')
  getById(@Param('id') id: string): Observable<HeroResponse> {
    return this.heroService.findOne({ id: +id });
  }
}
