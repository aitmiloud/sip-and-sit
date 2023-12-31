import { EntityHelper } from 'src/utils/entity-helper';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { City } from '../../cities/entities/city.entity';

@Entity()
export class Region extends EntityHelper {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => City, (city) => city.region)
  cities: City[];
}
