import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreatePlaces1587610017794 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'places',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'personasid',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'gps_lat',
            type: 'double',
          },
          {
            name: 'gps_lon',
            type: 'double',
          },
          {
            name: 'typeid',
            type: 'varchar',
          },
          {
            name: 'musicalgenres',
            type: 'varchar',
          },
          {
            name: 'demographicid',
            type: 'varchar',
          },
          {
            name: 'type',
            type: 'varchar',
          },
          {
            name: 'medium_age',
            type: 'int',
          },
          {
            name: 'lgbt_audience',
            type: 'int',
          },
          {
            name: 'female_audience',
            type: 'int',
          },
          {
            name: 'male_audience',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    // await queryRunner.createForeignKey(
    //   'device_configurations',
    //   new TableForeignKey({
    //     columnNames: ['userid'],
    //     referencedTableName: 'users',
    //     referencedColumnNames: ['id'],
    //     onDelete: 'CASCADE',
    //   }),
    // );

    await queryRunner.createForeignKey(
      'places',
      new TableForeignKey({
        columnNames: ['personasid'],
        referencedTableName: 'personas',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('places', 'personasid');
    await queryRunner.dropTable('places');
  }
}
