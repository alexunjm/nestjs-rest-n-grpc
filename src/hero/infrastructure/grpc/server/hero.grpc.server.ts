import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable, Subject } from 'rxjs';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { HeroResponse } from 'src/hero/infrastructure/grpc/proto/interfaces/hero.response';
import { HeroByIdRequest } from 'src/hero/infrastructure/grpc/proto/interfaces/hero-by-id.request';
import { FindHeroByIdCommand } from 'src/hero/domain/port/command/find-hero-by-id.command';

@Controller('hero')
export class HeroGrpcServer {
  constructor(private readonly findHeroByIdCommand: FindHeroByIdCommand) {}

  @GrpcMethod('Hero')
  findOne(
    data: HeroByIdRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): HeroResponse {
    Logger.log({ metadata, request: call.request });
    return this.findHeroByIdCommand.exec(data.id);
  }

  @GrpcStreamMethod('Hero')
  findMany(data$: Observable<HeroByIdRequest>): Observable<HeroResponse> {
    const hero$ = new Subject<HeroResponse>();

    const onNext = (HeroByIdRequest: HeroByIdRequest) => {
      const item = this.findHeroByIdCommand.exec(HeroByIdRequest.id);
      hero$.next(item);
    };
    const onComplete = () => hero$.complete();
    data$.subscribe({
      next: onNext,
      complete: onComplete,
    });

    return hero$.asObservable();
  }
}
