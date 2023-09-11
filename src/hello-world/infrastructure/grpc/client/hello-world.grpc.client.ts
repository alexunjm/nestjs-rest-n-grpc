import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Greeter } from 'src/grpc/proto/helloworld/interfaces/greeter.interface';
import { HelloReply } from 'src/grpc/proto/helloworld/interfaces/hello.reply';
import { HelloRequest } from 'src/grpc/proto/helloworld/interfaces/hello.request';
import { HelloWorldExternal } from 'src/hello-world/application/hello-world.external';

@Injectable()
export class HelloWorldGrpcClient implements OnModuleInit, HelloWorldExternal {
  private greeterService: Greeter;

  constructor(@Inject('HELLO_PACKAGE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.greeterService = this.client.getService<Greeter>('Greeter');
  }

  sayHello(data: HelloRequest): Observable<HelloReply> {
    return this.greeterService.SayHello(data);
  }
}
