import { EntityRepository, Repository } from "typeorm";
import Movies from ".";

@EntityRepository(Movies)
export default class MoviesRepository extends Repository<Movies> {
	async getPopularMovies() {
		return await this.find();
	}
}