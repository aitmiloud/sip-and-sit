import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Place } from './entities/place.entity';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private readonly placeRepository: Repository<Place>,
  ) {}

  create(createPlaceDto: CreatePlaceDto) {
    return this.placeRepository.save(
      this.placeRepository.create(createPlaceDto),
    );
  }

  findAll() {
    return this.placeRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} place`;
  }

  update(id: number, updatePlaceDto: UpdatePlaceDto) {
    return `This action updates a #${id} place` + updatePlaceDto;
  }

  remove(id: number) {
    return `This action removes a #${id} place`;
  }
}
