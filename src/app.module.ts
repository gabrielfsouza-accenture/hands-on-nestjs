import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GrowerModule } from './grower/grower.module';

@Module({
  imports: [GrowerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
