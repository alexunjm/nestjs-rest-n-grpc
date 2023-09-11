import { Observable } from 'rxjs';
import { HelloWorldExternal } from 'src/hello-world/application/hello-world.external';

type GreetingParam = { name: string };
type Hello = { message: string };

export abstract class SayHelloCommand {
  abstract exec(param: GreetingParam): Observable<Hello>;
}

export class SayHelloUseCase implements SayHelloCommand {
  constructor(private readonly externalGreeting: HelloWorldExternal) {}

  exec(param: GreetingParam): Observable<Hello> {
    return this.externalGreeting.sayHello(param);
  }
}
