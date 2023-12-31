import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Region } from 'src/regions/entities/region.entity';
import { RegionSeedService } from './region-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Region])],
  providers: [RegionSeedService],
  exports: [RegionSeedService],
})
export class RegionSeedModule {}
