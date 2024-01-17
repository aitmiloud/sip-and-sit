import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { SearchPlaceDto } from './dto/search-place.dto';
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

  getPlacesWithFilters = async (searchPlaceDto: SearchPlaceDto) => {
    const {
      name,
      city,
      internetSpeed,
      powerOutlet,
      seating,
      noiseLevel,
      crowdLevel,
      brightness,
      hasSmokingArea,
      hasParking,
      hasAirConditioning,
    } = searchPlaceDto;

    const queryBuilder = this.placeRepository.createQueryBuilder('place');

    if (name) {
      queryBuilder.andWhere('place.name like :name', { name: `%${name}%` });
    }

    if (city) {
      queryBuilder.andWhere('place.city = :city', { city });
    }

    if (internetSpeed) {
      queryBuilder.andWhere('place.internetSpeed = :internetSpeed', {
        internetSpeed,
      });
    }

    if (powerOutlet) {
      queryBuilder.andWhere('place.powerOutlet = :powerOutlet', {
        powerOutlet,
      });
    }

    if (seating) {
      queryBuilder.andWhere('place.seating = :seating', { seating });
    }

    if (noiseLevel) {
      queryBuilder.andWhere('place.noiseLevel = :noiseLevel', { noiseLevel });
    }

    if (crowdLevel) {
      queryBuilder.andWhere('place.crowdLevel = :crowdLevel', { crowdLevel });
    }

    if (brightness) {
      queryBuilder.andWhere('place.brightness = :brightness', { brightness });
    }

    if (hasSmokingArea) {
      queryBuilder.andWhere('place.hasSmokingArea = :hasSmokingArea', {
        hasSmokingArea,
      });
    }

    if (hasParking) {
      queryBuilder.andWhere('place.hasParking = :hasParking', { hasParking });
    }

    if (hasAirConditioning) {
      queryBuilder.andWhere('place.hasAirConditioning = :hasAirConditioning', {
        hasAirConditioning,
      });
    }

    const places = await queryBuilder.getMany();

    return places;
  };

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
