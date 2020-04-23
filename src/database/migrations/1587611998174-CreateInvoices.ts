import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateInvoices1587611998174 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'invoices',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'ownerid',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'customerid',
            type: 'varchar',
          },
          {
            name: 'deviceid',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'duetotal',
            type: 'double',
          },
          {
            name: 'totalpaid',
            type: 'double',
          },
          {
            name: 'paymentmethods',
            type: 'double',
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['pending', 'processing', 'concluded', 'canceld'],
          },
          {
            name: 'duedate',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'datepaid',
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
      'invoices',
      new TableForeignKey({
        columnNames: ['deviceid'],
        referencedTableName: 'devices',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('invoices', 'deviceid');
    await queryRunner.dropTable('invoices');
  }
}
