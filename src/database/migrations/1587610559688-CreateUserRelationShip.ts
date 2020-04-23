import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateUserRelationShip1587610559688
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_relationship',
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
            length: '50',
            isNullable: true,
          },
          {
            name: 'placeid',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'personasid',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'user_relationship',
      new TableForeignKey({
        columnNames: ['placeid'],
        referencedTableName: 'places',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'user_relationship',
      new TableForeignKey({
        columnNames: ['personasid'],
        referencedTableName: 'personas',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'user_relationship',
      new TableForeignKey({
        columnNames: ['userid'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('user_relationship', 'placeid');
    await queryRunner.dropForeignKey('user_relationship', 'userid');
    await queryRunner.dropForeignKey('user_relationship', 'personasid');
    await queryRunner.dropTable('user_relationship');
  }
}
