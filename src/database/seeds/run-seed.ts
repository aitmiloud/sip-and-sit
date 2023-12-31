import { NestFactory } from '@nestjs/core';
import { PlaceSeedService } from './place/place-seed.service';
import { CitySeedService } from './city/city-seed.service';
import { RegionSeedService } from './region/region-seed.service';
import { RoleSeedService } from './role/role-seed.service';
import { SeedModule } from './seed.module';
import { StatusSeedService } from './status/status-seed.service';
import { UserSeedService } from './user/user-seed.service';

const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);

  // run
  await app.get(RoleSeedService).run();
  await app.get(StatusSeedService).run();
  await app.get(UserSeedService).run();

  await app.get(RegionSeedService).run();

  await app.get(CitySeedService).run();

  await app.get(PlaceSeedService).run();

  await app.close();
};

void runSeed();
