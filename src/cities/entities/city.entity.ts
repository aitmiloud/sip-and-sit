import { EntityHelper } from 'src/utils/entity-helper';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Region } from '../../regions/entities/region.entity';

@Entity()
export class City extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Region, (region) => region.cities)
  region: Region;
}
