import { Observable } from 'rxjs';
import { GreetingParam } from 'src/hello-world/domain/model/greeting.param';
import { Hello } from 'src/hello-world/domain/model/hello';

export abstract class HelloWorldDao {
  abstract sayHello(data: GreetingParam): Observable<Hello>;
}
