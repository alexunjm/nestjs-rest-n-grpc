import { Provider } from '@nestjs/common';
import { FindHeroByIdUseCase } from 'src/hero/application/find-hero-by-id.use-case';
import { FindHeroByIdCommand } from 'src/hero/domain/port/command/find-hero-by-id.command';

export const findHeroById: { providers: Provider[] } = {
  providers: [{ provide: FindHeroByIdCommand, useClass: FindHeroByIdUseCase }],
};
