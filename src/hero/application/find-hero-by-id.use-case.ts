import { Hero } from 'src/hero/domain/model/hero';
import { FindHeroByIdCommand } from 'src/hero/domain/port/command/find-hero-by-id.command';

export class FindHeroByIdUseCase implements FindHeroByIdCommand {
  private readonly heroes: Hero[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
    { id: 3, name: 'Alex' },
  ];

  exec(id: number): Hero {
    return this.heroes.find((hero) => id === hero.id);
  }
}
