import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePlaceTable1704036983784 implements MigrationInterface {
  name = 'CreatePlaceTable1704036983784';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."place_internetspeed_enum" AS ENUM('slow', 'average', 'fast', 'veryFast')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."place_poweroutlet_enum" AS ENUM('abundant', 'adequate', 'limited', 'unavailable')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."place_seating_enum" AS ENUM('uncomfortable', 'average', 'comfortable')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."place_noiselevel_enum" AS ENUM('quiet', 'average', 'noisy')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."place_crowdlevel_enum" AS ENUM('empty', 'average', 'crowded')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."place_brightness_enum" AS ENUM('dark', 'average', 'bright')`,
    );
    await queryRunner.query(
      `CREATE TABLE "place" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "internetSpeed" "public"."place_internetspeed_enum" NOT NULL DEFAULT 'average', "powerOutlet" "public"."place_poweroutlet_enum" NOT NULL DEFAULT 'adequate', "seating" "public"."place_seating_enum" NOT NULL DEFAULT 'average', "noiseLevel" "public"."place_noiselevel_enum" NOT NULL DEFAULT 'average', "crowdLevel" "public"."place_crowdlevel_enum" NOT NULL DEFAULT 'average', "brightness" "public"."place_brightness_enum" NOT NULL DEFAULT 'average', "hasSmokingArea" boolean NOT NULL DEFAULT false, "hasParking" boolean NOT NULL DEFAULT false, "hasAirConditioning" boolean NOT NULL DEFAULT false, "latitude" double precision, "longitude" double precision, "location" geography(Point,4326), "links" jsonb, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "cityId" integer, "photosId" uuid, CONSTRAINT "PK_96ab91d43aa89c5de1b59ee7cca" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_493d5e591af774a1587d363fb8" ON "place" ("name") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_497f3216ef683acf6954bd6fb2" ON "place" USING GiST ("location") `,
    );
    await queryRunner.query(
      `ALTER TABLE "place" ADD CONSTRAINT "FK_9c14632442c465f35f8e7e81c46" FOREIGN KEY ("cityId") REFERENCES "city"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "place" ADD CONSTRAINT "FK_fe7d5b5ee1a52f66f5d82b22dd3" FOREIGN KEY ("photosId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "place" DROP CONSTRAINT "FK_fe7d5b5ee1a52f66f5d82b22dd3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "place" DROP CONSTRAINT "FK_9c14632442c465f35f8e7e81c46"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_497f3216ef683acf6954bd6fb2"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_493d5e591af774a1587d363fb8"`,
    );
    await queryRunner.query(`DROP TABLE "place"`);
    await queryRunner.query(`DROP TYPE "public"."place_brightness_enum"`);
    await queryRunner.query(`DROP TYPE "public"."place_crowdlevel_enum"`);
    await queryRunner.query(`DROP TYPE "public"."place_noiselevel_enum"`);
    await queryRunner.query(`DROP TYPE "public"."place_seating_enum"`);
    await queryRunner.query(`DROP TYPE "public"."place_poweroutlet_enum"`);
    await queryRunner.query(`DROP TYPE "public"."place_internetspeed_enum"`);
  }
}
