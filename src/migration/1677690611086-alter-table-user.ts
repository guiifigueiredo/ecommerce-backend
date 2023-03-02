import { MigrationInterface, QueryRunner } from 'typeorm';

export class alterTableUser1677690611086 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        ALTER TABLE public.user add unique(email);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(``);
  }
}
