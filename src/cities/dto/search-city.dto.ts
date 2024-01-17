import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
import { lowerCaseTransformer } from '../../utils/transformers/lower-case.transformer';

export class SearchCityDto {
  @ApiProperty({ example: 'rab' })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @Transform(lowerCaseTransformer)
  name: string;
}
