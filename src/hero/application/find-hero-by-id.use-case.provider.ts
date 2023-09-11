import { Provider } from '@nestjs/common';
import {
  FindHeroByIdCommand,
  FindHeroByIdUseCase,
} from 'src/hero/application/find-hero-by-id.use-case';

export const findHeroById: { providers: Provider[] } = {
  providers: [{ provide: FindHeroByIdCommand, useClass: FindHeroByIdUseCase }],
};
