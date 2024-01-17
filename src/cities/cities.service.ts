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

  /**
   * Search for a city by name using the query builder and the 'like' operator
   * @param name
   * @returns Promise<City[]>
   */
  findByName = async (name: string): Promise<City[]> => {
    const cities = await this.cityRepository
      .createQueryBuilder('city')
      .where('city.name like :name', { name: `%${name}%` })
      .getMany();
    return cities;
  };

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
