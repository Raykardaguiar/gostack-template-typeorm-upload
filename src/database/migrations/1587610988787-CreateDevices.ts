import {
  MigrationInterface,
  QueryRunner,
  TableForeignKey,
  Table,
} from 'typeorm';

export default class CreateDevices1587610988787 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'devices',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'serial',
            type: 'int',
          },
          {
            name: 'model',
            type: 'varchar',
            length: '3',
          },
          {
            name: 'hardwareid',
            type: 'varchar',
            length: '8',
          },
          {
            name: 'activationkey',
            type: 'varchar',
            length: '10',
          },
          {
            name: 'status',
            type: 'varchar',
            length: '10',
          },
          {
            name: 'placeid',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'metadata',
            type: 'longtext',
            isNullable: true,
          },
          {
            name: 'configid',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'systeminfo',
            type: 'longtext',
            isNullable: true,
          },
          {
            name: 'gps_range',
            type: 'int',
          },
          {
            name: 'billingamount',
            type: 'double',
          },
          {
            name: 'billingpercent',
            type: 'Double',
          },
          {
            name: 'billingtype',
            type: 'enum',
            enum: ['credit', 'debit', 'invoice'],
            isNullable: true,
          },
          {
            name: 'paymentmethod',
            type: 'enum',
            enum: ['credit', 'debit', 'invoice'],
            isNullable: true,
          },
          {
            name: 'billingrecurrency',
            type: 'enum',
            enum: ['5', '15', '30'],
            isNullable: true,
          },
          {
            name: 'daystosuspend',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'nextduedate',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'last_connection',
            type: 'timestamp',
            default: 'now()',
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
      'devices',
      new TableForeignKey({
        columnNames: ['placeid'],
        referencedTableName: 'places',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('devices', 'RolesId');
    await queryRunner.dropTable('devices');
  }
}
