import { createDbConnection, stopDatabaseConnection } from '../database';
import { gql, GraphQLClient } from 'graphql-request';
jest.useFakeTimers();

beforeAll(async () => {
	await createDbConnection();
});

afterAll(async () => {
	await stopDatabaseConnection();
});

test('fetch movie details', async () => {
	const client = new GraphQLClient('http://localhost:3001/graphql');

	const query = gql`
		query ($movieId: Int!) {
			movie(id: $movieId) {
				id
				name
				plot
				poster
				rating
				releaseDate
				runTime
				trailers {
					link
				}
			}
		}
	`;

	const variables = {
		movieId: 1,
	};
	let response = await client.request(query, variables);
	response = JSON.stringify(response);

	expect(response).toStrictEqual(
		`{"movie":{"id":1,"name":"The Expendables","plot":"Barney Ross leads a band of highly skilled mercenaries including knife enthusiast Lee Christmas, a martial arts expert, heavy weapons specialist, demolitionist, and a loose-cannon sniper. When the group is commissioned by the mysterious Mr. Church to assassinate the dictator of a small South American island, Barney and Lee visit the remote locale to scout out their opposition and discover the true nature of the conflict engulfing the city.","poster":"https://www.themoviedb.org/t/p/w220_and_h330_face/tDynwDj3pvexrEQ8wb0uy8EdcGQ.jpg","rating":6.2,"releaseDate":"2010-08-03","runTime":103,"trailers":[{"link":"https://www.youtube.com/watch?v=8KtYRALe-xo"}]}}`,
	);

	await client.request(query, {
		movieId: 112,
	}).catch(error => {
		expect(error.message).toContain('Movie not found');
	});
});
