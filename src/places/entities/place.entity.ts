import { EntityHelper } from 'src/utils/entity-helper';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { City } from 'src/cities/entities/city.entity';
import { Point } from 'geojson';
import { FileEntity } from 'src/files/entities/file.entity';

export enum InternetSpeedEnum {
  slow = 'slow',
  average = 'average',
  fast = 'fast',
  veryFast = 'veryFast',
}

export enum PowerOutletEnum {
  abundant = 'abundant',
  adequate = 'adequate',
  limited = 'limited',
  unavailable = 'unavailable',
}

export enum SeatingEnum {
  uncomfortable = 'uncomfortable',
  average = 'average',
  comfortable = 'comfortable',
}

export enum NoiseLevelEnum {
  quiet = 'quiet',
  average = 'average',
  noisy = 'noisy',
}

export enum CrowdLevelEnum {
  empty = 'empty',
  average = 'average',
  crowded = 'crowded',
}

export enum BritghtnessEnum {
  dark = 'dark',
  average = 'average',
  bright = 'bright',
}

interface Links {
  facebook?: string;
  instagram?: string;
  website?: string;
}

@Entity()
export class Place extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  name: string;

  @Column()
  address: string;

  @Column({
    type: 'enum',
    enum: InternetSpeedEnum,
    default: InternetSpeedEnum.average,
  })
  internetSpeed: InternetSpeedEnum;

  @Column({
    type: 'enum',
    enum: PowerOutletEnum,
    default: PowerOutletEnum.adequate,
  })
  powerOutlet: PowerOutletEnum;

  @Column({
    type: 'enum',
    enum: SeatingEnum,
    default: SeatingEnum.average,
  })
  seating: SeatingEnum;

  @Column({
    type: 'enum',
    enum: NoiseLevelEnum,
    default: NoiseLevelEnum.average,
  })
  noiseLevel: NoiseLevelEnum;

  @Column({
    type: 'enum',
    enum: CrowdLevelEnum,
    default: CrowdLevelEnum.average,
  })
  crowdLevel: CrowdLevelEnum;

  @Column({
    type: 'enum',
    enum: BritghtnessEnum,
    default: BritghtnessEnum.average,
  })
  brightness: BritghtnessEnum;

  @Column({ type: 'boolean', default: false })
  hasSmokingArea: boolean;

  @Column({ type: 'boolean', default: false })
  hasParking: boolean;

  @Column({ type: 'boolean', default: false })
  hasAirConditioning: boolean;

  @ManyToOne(() => City, (city) => city.places)
  city: City;

  @Column({ type: 'double precision', nullable: true })
  latitude: number;

  @Column({ type: 'double precision', nullable: true })
  longitude: number;

  @Index({ spatial: true })
  @Column({
    type: 'geography',
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: true,
  })
  location: Point;

  @ManyToOne(() => FileEntity, {
    eager: true,
  })
  photos?: FileEntity | null;

  @Column({ type: 'jsonb', nullable: true })
  links: Links;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
