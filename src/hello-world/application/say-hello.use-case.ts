import { Observable } from 'rxjs';
import { GreetingParam } from 'src/hello-world/domain/model/greeting.param';
import { Hello } from 'src/hello-world/domain/model/hello';
import { SayHelloCommand } from 'src/hello-world/domain/port/command/say-hello.command';
import { HelloWorldDao } from 'src/hello-world/domain/port/dao/hello-world.dao';

export class SayHelloUseCase implements SayHelloCommand {
  constructor(private readonly externalGreeting: HelloWorldDao) {}

  exec(param: GreetingParam): Observable<Hello> {
    return this.externalGreeting.sayHello(param);
  }
}
