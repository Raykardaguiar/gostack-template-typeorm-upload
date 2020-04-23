import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreatePlayerLog1587612791921
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'playerlog',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'artist',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'album',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'song',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'label',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'genre',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'length',
            type: 'int',
          },
          {
            name: 'isvideo',
            type: 'int',
          },
          {
            name: 'errorCount',
            type: 'int',
          },
          {
            name: 'avgvolume',
            type: 'int',
          },
          {
            name: 'peakVolume',
            type: 'int',
          },
          {
            name: 'isfree',
            type: 'int',
          },
          {
            name: 'israndom',
            type: 'int',
          },
          {
            name: 'ispriority',
            type: 'int',
          },
          {
            name: 'isfinished',
            type: 'int',
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
      'playerlog',
      new TableForeignKey({
        columnNames: ['deviceid'],
        referencedTableName: 'devices',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('playerlog', 'deviceid');
    await queryRunner.dropTable('playerlog');
  }
}
