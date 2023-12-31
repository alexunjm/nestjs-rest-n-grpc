import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HelloReply } from 'src/hello-world/infrastructure/grpc/proto/interfaces/hello.reply';
import { SayHelloCommand } from 'src/hello-world/domain/port/command/say-hello.command';

@Controller('rest/hello')
export class HelloWorldRest {
  constructor(private readonly sayHelloCommand: SayHelloCommand) {}

  @Get(':name')
  sayHello(@Param('name') name: string): Observable<HelloReply> {
    return this.sayHelloCommand.exec({ name });
  }
}
