import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { City } from '../../cities/entities/city.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';
import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  Validate,
} from 'class-validator';
import {
  InternetSpeedEnum,
  PowerOutletEnum,
  SeatingEnum,
  NoiseLevelEnum,
  CrowdLevelEnum,
  BritghtnessEnum,
} from '../entities/place.entity';

export class SearchPlaceDto {
  @IsOptional()
  @IsString()
  @Transform(lowerCaseTransformer)
  name?: string;

  @IsOptional()
  @IsEnum(InternetSpeedEnum)
  internetSpeed?: InternetSpeedEnum;

  @IsOptional()
  @IsEnum(PowerOutletEnum)
  powerOutlet?: PowerOutletEnum;

  @IsOptional()
  @IsEnum(SeatingEnum)
  seating?: SeatingEnum;

  @IsOptional()
  @IsEnum(NoiseLevelEnum)
  noiseLevel?: NoiseLevelEnum;

  @IsOptional()
  @IsEnum(CrowdLevelEnum)
  crowdLevel?: CrowdLevelEnum;

  @IsOptional()
  @IsEnum(BritghtnessEnum)
  brightness?: BritghtnessEnum;

  @IsOptional()
  @IsBoolean()
  hasSmokingArea?: boolean;

  @IsOptional()
  @IsBoolean()
  hasParking?: boolean;

  @IsOptional()
  @IsBoolean()
  hasAirConditioning?: boolean;

  @IsOptional()
  @ApiProperty({ type: City })
  @Validate(IsExist, ['City', 'id'], {
    message: 'cityNotExists',
  })
  city?: City;
}
