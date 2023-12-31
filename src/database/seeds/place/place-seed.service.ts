import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from 'src/places/entities/place.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlaceSeedService {
  constructor(
    @InjectRepository(Place)
    private repository: Repository<Place>,
  ) {}

  async run() {
    const count = await this.repository.count();

    if (count === 0) {
      await this.repository.save(this.repository.create({}));
    }
  }
}
