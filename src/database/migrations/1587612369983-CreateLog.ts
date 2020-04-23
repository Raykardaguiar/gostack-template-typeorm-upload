import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateLog1587612369983 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'credit_log',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'type',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'desc',
            type: 'varchar',
          },
          {
            name: 'deviceid',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'amount',
            type: 'float',
          },
          {
            name: 'balance',
            type: 'float',
          },
          {
            name: 'time',
            type: 'time',
          },
          {
            name: 'date',
            type: 'date',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'credit_log',
      new TableForeignKey({
        columnNames: ['deviceid'],
        referencedTableName: 'devices',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('credit_log', 'deviceid');
    await queryRunner.dropTable('credit_log');
  }
}
