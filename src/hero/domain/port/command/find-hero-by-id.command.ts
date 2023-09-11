import { Hero } from 'src/hero/domain/model/hero';

export abstract class FindHeroByIdCommand {
  abstract exec(id: number): Hero;
}
