type Hero = { id: number; name: string };

export abstract class FindHeroByIdCommand {
  abstract exec(id: number): Hero;
}

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
