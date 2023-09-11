import {
  FindHeroByIdCommand,
  FindHeroByIdUseCase,
} from 'src/hero/application/find-hero-by-id.use-case';

export const heroProviders = {
  FindHeroById: { provide: FindHeroByIdCommand, useClass: FindHeroByIdUseCase },
};
