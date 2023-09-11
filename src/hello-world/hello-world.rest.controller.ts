import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Greeter } from 'src/grpc/proto/helloworld/interfaces/greeter.interface';
import { HelloReply } from 'src/grpc/proto/helloworld/interfaces/hello.reply';

@Controller('rest/hello')
export class HelloWorldRest implements OnModuleInit {
  private greeterService: Greeter;

  constructor(@Inject('HELLO_PACKAGE') private readonly client2: ClientGrpc) {}

  onModuleInit() {
    this.greeterService = this.client2.getService<Greeter>('Greeter');
  }

  @Get()
  getExternal(): Observable<HelloReply> {
    return this.greeterService.SayHello({ name: 'Alex' });
  }
}
