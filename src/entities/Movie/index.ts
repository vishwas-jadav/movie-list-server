import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";
import Trailer from "../Trailer";

@ObjectType()
@Entity({ name: 'movies' })
export default class Movies extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id!: number;

	@Field(() => String)
	@Column({ type: 'varchar' })
	name!: string;

	@Field(() => String, { nullable: true })
	@Column({ type: 'date', nullable: true })
	releaseDate?: Date;

	@Field(() => Int)
	@Column({ type: 'int' })
	runTime!: number;

	@Field(() => Number, { nullable: true })
	@Column({ type: 'double', nullable: true })
	rating?: number;

	@Field(() => String)
	@Column({ type: 'text' })
	poster!: string;

	@Field(() => String)
	@Column({ type: 'text' })
	plot!: string;

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

	@Field(() => [Trailer], { nullable: true })
	@OneToMany(() => Trailer, trailer => trailer.movie)
	trailers!: Trailer[];
}