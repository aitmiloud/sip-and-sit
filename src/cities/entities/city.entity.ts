import { EntityHelper } from 'src/utils/entity-helper';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Region } from '../../regions/entities/region.entity';
import { Place } from '../../places/entities/place.entity';

@Entity()
export class City extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Region, (region) => region.cities)
  region: Region;

  @OneToMany(() => Place, (place) => place.city)
  places: Place[];
}
