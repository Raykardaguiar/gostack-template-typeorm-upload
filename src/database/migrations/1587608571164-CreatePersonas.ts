import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatePersonas1587608571164 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'personas',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'firstname',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'lastname',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'companyname',
            type: 'varchar',
            length: '40',
          },
          {
            name: 'iscompany',
            type: 'varchar',
          },
          {
            name: 'document',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'doctype',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'phone',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'mobile_phone',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '60',
          },
          {
            name: 'website',
            type: 'varchar',
            length: '60',
          },
          {
            name: 'address',
            type: 'varchar',
            length: '60',
          },
          {
            name: 'address_code',
            type: 'varchar',
            length: '10',
          },
          {
            name: 'address_number',
            type: 'varchar',
            length: '10',
          },
          {
            name: 'address_complement',
            type: 'varchar',
            length: '10',
          },
          {
            name: 'address_city',
            type: 'varchar',
            length: '40',
          },
          {
            name: 'address_state',
            type: 'varchar',
            length: '40',
          },
          {
            name: 'address_country',
            type: 'varchar',
            length: '40',
          },
          {
            name: 'status',
            type: 'varchar',
            length: '40',
          },
          {
            name: 'type',
            type: 'enum',
            enum: ['admin', 'user'],
          },
          {
            name: 'parentid',
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
    //   'users',
    //   new TableForeignKey({
    //     columnNames: ['idroles'],
    //     referencedTableName: 'roles',
    //     referencedColumnNames: ['id'],
    //     onDelete: 'SET NULL',
    //   }),
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('personas');
  }
}
