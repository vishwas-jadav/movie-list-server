import { Arg, Int, Query, Resolver } from 'type-graphql';
import Movie from '../entities/Movie';

@Resolver()
export class MoviesResolver {
	@Query(() => [Movie])
	async popularMovies() {
		return await Movie.find({
			order: {
				rating: 'DESC',
			},
		});
	}

	@Query(() => Movie)
	async movie(@Arg('id', () => Int) id: number) {
		const movie = await Movie.findOne(id, {
			relations: ['trailers']
		});
		if (movie) {
			return movie;
		} else {
			throw new Error('Movie not found');
		}
	}
}
