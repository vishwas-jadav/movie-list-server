import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMoviesAndTrailersTable1636898391892
	implements MigrationInterface
{
	name = 'CreateMoviesAndTrailersTable1636898391892';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE \`trailers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NULL, \`link\` text NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`movieId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
		);
		await queryRunner.query(
			`CREATE TABLE \`movies\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`releaseDate\` date NULL, \`runTime\` int NOT NULL, \`rating\` double NULL, \`poster\` text NOT NULL, \`plot\` text NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
		);
		await queryRunner.query(
			`ALTER TABLE \`trailers\` ADD CONSTRAINT \`FK_00e72f453c7bab48f3cb0cadf5a\` FOREIGN KEY (\`movieId\`) REFERENCES \`movies\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`trailers\` DROP FOREIGN KEY \`FK_00e72f453c7bab48f3cb0cadf5a\``,
		);
		await queryRunner.query(`DROP TABLE \`movies\``);
		await queryRunner.query(`DROP TABLE \`trailers\``);
	}
}
