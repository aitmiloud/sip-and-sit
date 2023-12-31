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
  name: string | null;

  @ApiProperty({ example: 'Place address' })
  @IsNotEmpty()
  address: string | null;

  @ApiProperty({ type: City })
  @Validate(IsExist, ['City', 'id'], {
    message: 'cityNotExists',
  })
  city?: City | null;

  @ApiProperty({
    type: InternetSpeedEnum,
    enum: InternetSpeedEnum,
    example: InternetSpeedEnum.average,
  })
  internetSpeed?: InternetSpeedEnum | null;

  @ApiProperty({
    type: PowerOutletEnum,
    enum: PowerOutletEnum,
    example: PowerOutletEnum.adequate,
  })
  powerOutlet?: PowerOutletEnum | null;

  @ApiProperty({
    type: SeatingEnum,
    enum: SeatingEnum,
    example: SeatingEnum.average,
  })
  seating?: SeatingEnum | null;

  @ApiProperty({
    type: NoiseLevelEnum,
    enum: NoiseLevelEnum,
    example: NoiseLevelEnum.average,
  })
  noiseLevel?: NoiseLevelEnum | null;

  @ApiProperty({
    type: CrowdLevelEnum,
    enum: CrowdLevelEnum,
    example: CrowdLevelEnum.average,
  })
  crowdLevel?: CrowdLevelEnum | null;

  @ApiProperty({
    type: BritghtnessEnum,
    enum: BritghtnessEnum,
    example: BritghtnessEnum.average,
  })
  brightness?: BritghtnessEnum | null;

  @ApiProperty({ example: false })
  hasSmokingArea?: boolean | null;

  @ApiProperty({ example: false })
  hasParking?: boolean | null;

  @ApiProperty({ example: false })
  hasAirConditioning?: boolean | null;

  @ApiProperty({ example: '-12.123456' })
  latitude?: string | null;

  @ApiProperty({ example: '12.123456' })
  longitude?: string | null;

  @ApiProperty({
    example: { type: 'Point', coordinates: [-12.123456, 12.123456] },
  })
  location?: {
    type: 'Point';
    coordinates: [number, number];
  };

  @ApiProperty({ example: { facebook: 'https://facebook.com', instagram: '' } })
  links?: Links | null;
}
