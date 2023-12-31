import { Module } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { RegionsController } from './regions.controller';

@Module({
  controllers: [RegionsController],
  providers: [RegionsService],
})
export class RegionsModule {}
