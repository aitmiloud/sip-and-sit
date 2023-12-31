import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from 'src/places/entities/place.entity';
import { PlaceSeedService } from './place-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Place])],
  providers: [PlaceSeedService],
  exports: [PlaceSeedService],
})
export class PlaceSeedModule {}
