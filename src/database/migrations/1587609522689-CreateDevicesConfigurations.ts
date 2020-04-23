import {
  MigrationInterface,
  QueryRunner,
  TableForeignKey,
  Table,
} from 'typeorm';

export default class CreateDevicesConfigurations1587609522689
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'device_configurations',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'userid',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'personasid',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'label',
            type: 'varchar',
          },
          {
            name: 'configuration',
            type: 'longtext',
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

    await queryRunner.createForeignKey(
      'device_configurations',
      new TableForeignKey({
        columnNames: ['userid'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'device_configurations',
      new TableForeignKey({
        columnNames: ['personasid'],
        referencedTableName: 'personas',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('device_configurations', 'personasid');
    await queryRunner.dropForeignKey('device_configurations', 'userid');
    await queryRunner.dropTable('device_configurations');
  }
}
