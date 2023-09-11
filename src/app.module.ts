import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { HeroModule } from 'src/hero/hero.module';
import { HelloWorldModule } from 'src/hello-world/hello-world.module';

@Module({
  imports: [HeroModule, HelloWorldModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
