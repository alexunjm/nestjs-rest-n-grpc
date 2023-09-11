import { Observable } from 'rxjs';
import { HelloReply } from 'src/grpc/proto/helloworld/interfaces/hello.reply';
import { HelloRequest } from 'src/grpc/proto/helloworld/interfaces/hello.request';

export abstract class HelloWorldExternal {
  abstract sayHello(data: HelloRequest): Observable<HelloReply>;
}
