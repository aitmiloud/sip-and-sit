import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { City } from '../../cities/entities/city.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';
import { IsNotEmpty, Validate } from 'class-validator';
import {
  InternetSpeedEnum,
  PowerOutletEnum,
  SeatingEnum,
  NoiseLevelEnum,
  CrowdLevelEnum,
  BritghtnessEnum,
  Links,
} from '../entities/place.entity';

export class CreatePlaceDto {
  @ApiProperty({ example: 'Place name' })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Place address' })
  @IsNotEmpty()
  address: string;

  @ApiProperty({ type: City })
  @Validate(IsExist, ['City', 'id'], {
    message: 'cityNotExists',
  })
  city?: City;

  @ApiProperty({
    type: InternetSpeedEnum,
    enum: InternetSpeedEnum,
    example: InternetSpeedEnum.average,
  })
  internetSpeed?: InternetSpeedEnum;

  @ApiProperty({
    type: PowerOutletEnum,
    enum: PowerOutletEnum,
    example: PowerOutletEnum.adequate,
  })
  powerOutlet?: PowerOutletEnum;

  @ApiProperty({
    type: SeatingEnum,
    enum: SeatingEnum,
    example: SeatingEnum.average,
  })
  seating?: SeatingEnum;

  @ApiProperty({
    type: NoiseLevelEnum,
    enum: NoiseLevelEnum,
    example: NoiseLevelEnum.average,
  })
  noiseLevel?: NoiseLevelEnum;

  @ApiProperty({
    type: CrowdLevelEnum,
    enum: CrowdLevelEnum,
    example: CrowdLevelEnum.average,
  })
  crowdLevel?: CrowdLevelEnum;

  @ApiProperty({
    type: BritghtnessEnum,
    enum: BritghtnessEnum,
    example: BritghtnessEnum.average,
  })
  brightness?: BritghtnessEnum;

  @ApiProperty({ example: false })
  hasSmokingArea?: boolean;

  @ApiProperty({ example: false })
  hasParking?: boolean;

  @ApiProperty({ example: false })
  hasAirConditioning?: boolean;

  @ApiProperty({ example: '-12.123456' })
  latitude?: number;

  @ApiProperty({ example: '12.123456' })
  longitude?: number;

  @ApiProperty({
    example: { type: 'Point', coordinates: [-12.123456, 12.123456] },
  })
  location?: {
    type: 'Point';
    coordinates: [number, number];
  };

  @ApiProperty({ example: { facebook: 'https://facebook.com', instagram: '' } })
  links?: Links;
}
