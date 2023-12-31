import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRegionAndCityTables1703797791346
  implements MigrationInterface
{
  name = 'CreateRegionAndCityTables1703797791346';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "region" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_5f48ffc3af96bc486f5f3f3a6da" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "city" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "regionId" integer, CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "city" ADD CONSTRAINT "FK_a702dde63cef536819298d776b5" FOREIGN KEY ("regionId") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "city" DROP CONSTRAINT "FK_a702dde63cef536819298d776b5"`,
    );
    await queryRunner.query(`DROP TABLE "city"`);
    await queryRunner.query(`DROP TABLE "region"`);
  }
}
