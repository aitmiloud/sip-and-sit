import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Region } from 'src/regions/entities/region.entity';
import { Repository } from 'typeorm';

interface RegionData {
  id: number;
  name: string;
}

@Injectable()
export class RegionSeedService {
  constructor(
    @InjectRepository(Region)
    private repository: Repository<Region>,
  ) {}

  async run() {
    const count = await this.repository.count();

    if (count === 0) {
      const regions: RegionData[] = [
        {
          id: 1,
          name: 'Tanger-Tétouan-Al Hoceïma',
        },
        {
          id: 2,
          name: "l'Oriental",
        },
        {
          id: 3,
          name: 'Fès-Meknès',
        },
        {
          id: 4,
          name: 'Rabat-Salé-Kénitra',
        },
        {
          id: 5,
          name: 'Béni Mellal-Khénifra',
        },
        {
          id: 6,
          name: 'Casablanca-Settat',
        },
        {
          id: 7,
          name: 'Marrakech-Safi',
        },
        {
          id: 8,
          name: 'Drâa-Tafilalet',
        },
        {
          id: 9,
          name: 'Souss-Massa',
        },
        {
          id: 10,
          name: 'Guelmim-Oued Noun',
        },
        {
          id: 11,
          name: 'Laâyoune-Sakia El Hamra',
        },
        {
          id: 12,
          name: 'Dakhla-Oued Ed Dahab',
        },
      ];

      for (const region of regions) {
        await this.repository.save(region);
      }
    }
  }
}
