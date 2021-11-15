import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";
import Movie from "../Movie";

@ObjectType()
@Entity({ name: 'trailers' })
export default class Trailers extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id!: number;

	@Field(() => String)
	@Column({ type: 'varchar', nullable: true })
	name?: string;

	@Field(() => String)
	@Column({ type: 'text' })
	link!: string;

	@Field(() => Movie, { nullable: true })
	@ManyToOne(() => Movie, movie => movie.trailers)
	movie!: number;
	@RelationId((trailer: Trailers) => trailer.movie)
	movieId!: number;

	@CreateDateColumn({
		type: 'datetime',
		name: 'createdAt'
	})
	createdAt!: Date

	@UpdateDateColumn({
		type: 'datetime',
		name: 'updatedAt'
	})
	updatedAt!: Date
}