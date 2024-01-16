import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  create(createCityDto: CreateCityDto) {
    const city = this.cityRepository.create(createCityDto);
    return this.cityRepository.save(city);
  }

  findAll() {
    const cities = this.cityRepository.find({});
    return cities;
  }

  findOne(id: number) {
    return `This action returns a #${id} city`;
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    const city = this.cityRepository.create(updateCityDto);
    return this.cityRepository.save(city);
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
