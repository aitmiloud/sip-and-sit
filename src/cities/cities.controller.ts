import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { SearchCityDto } from './dto/search-city.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cities')
@Controller({
  path: 'cities',
  version: '1',
})
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  create(@Body() createCityDto: CreateCityDto) {
    return this.citiesService.create(createCityDto);
  }

  @Get()
  findAll() {
    return this.citiesService.findAll();
  }

  @Get('search/:name')
  @HttpCode(HttpStatus.OK)
  findByName(@Param() searchCityDto: SearchCityDto) {
    return this.citiesService.findByName(searchCityDto.name);
  }
}
