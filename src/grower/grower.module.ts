import { Module } from '@nestjs/common';
import { GrowerService } from './grower.service';
import { GrowerController } from './grower.controller';
import GrowerRepository from './grower.repository';

@Module({
  controllers: [GrowerController],
  providers: [GrowerService, GrowerRepository],
})
export class GrowerModule {}
