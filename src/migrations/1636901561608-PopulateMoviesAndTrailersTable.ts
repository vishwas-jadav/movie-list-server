import { MigrationInterface, QueryRunner } from 'typeorm';

export class PopulateMoviesAndTrailersTable1636901561608
	implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void> {
		const moviesData = [
			{
				id: 1,
				name: 'The Expendables',
				poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/tDynwDj3pvexrEQ8wb0uy8EdcGQ.jpg',
				rating: 6.2,
				runTime: 103,
				releaseDate: new Date('Aug 03, 2010'),
				plot: 'Barney Ross leads a band of highly skilled mercenaries including knife enthusiast Lee Christmas, a martial arts expert, heavy weapons specialist, demolitionist, and a loose-cannon sniper. When the group is commissioned by the mysterious Mr. Church to assassinate the dictator of a small South American island, Barney and Lee visit the remote locale to scout out their opposition and discover the true nature of the conflict engulfing the city.'
			},
			{
				id: 2,
				name: 'Hercules',
				poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/16JPL3c6ET7ibfO35WjjWxCaVmj.jpg',
				rating: 7.5,
				runTime: 93,
				releaseDate: new Date('Jun 20, 1997'),
				plot: `Bestowed with superhuman strength, a young mortal named Hercules sets out to prove himself a hero in the eyes of his father, the great god Zeus. Along with his friends Pegasus, a flying horse, and Phil, a personal trainer, Hercules is tricked by the hilarious, hotheaded villain Hades, who's plotting to take over Mount Olympus!`
			},
			{
				id: 3,
				name: 'Mulan',
				poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/5TYgKxYhnhRNNwqnRAKHkgfqi2G.jpg',
				rating: 7.9,
				runTime: 88,
				releaseDate: new Date('Jun 18, 1998'),
				plot: `A tomboyish girl disguises herself as a young man so she can fight with the Imperial Chinese Army against the invading Huns. With help from wise-cracking dragon Mushu, Mulan just might save her country -- and win the heart of handsome Captain Li Shang.`
			},
			{
				id: 4,
				name: 'Black Water: Abyss',
				poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/95S6PinQIvVe4uJAd82a2iGZ0rA.jpg',
				rating: 5.1,
				runTime: 98,
				releaseDate: new Date('Jul 09, 2020'),
				plot: `An adventure-loving couple convince their friends to explore a remote, uncharted cave system in the forests of Northern Australia. With a tropical storm approaching, they abseil into the mouth of the cave, but when the caves start to flood, tensions rise as oxygen levels fall and the friends find themselves trapped. Unknown to them, the storm has also brought in a pack of dangerous and hungry crocodiles.`
			},
			{
				id: 5,
				name: 'The Avengers',
				poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
				rating: 7.7,
				runTime: 143,
				releaseDate: new Date('Apr 25, 2012'),
				plot: `When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!`
			},
			{
				id: 6,
				name: 'Cinderella',
				poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/4nssBcQUBadCTBjrAkX46mVEKts.jpg',
				rating: 7.0,
				runTime: 74,
				releaseDate: new Date('Feb 22, 1950'),
				plot: `Cinderella has faith her dreams of a better life will come true. With help from her loyal mice friends and a wave of her Fairy Godmother's wand, Cinderella's rags are magically turned into a glorious gown and off she goes to the Royal Ball. But when the clock strikes midnight, the spell is broken, leaving a single glass slipper... the only key to the ultimate fairy-tale ending!`
			},
			{
				id: 7,
				name: 'The Scientist',
				poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/hIkKM1nlzk8DThFT4vxgW1KoofL.jpg',
				rating: 6.5,
				runTime: 93,
				releaseDate: new Date('Sep 21, 2020'),
				plot: `An unconventional scientist, struggling to care for his terminally-ill wife, embarks on a journey to develop a cure for her. However, his methods of treatment and tampering with human DNA, could lead to the extinction of humanity.`
			},
			{
				id: 8,
				name: 'Coco',
				poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg',
				rating: 8.2,
				runTime: 105,
				releaseDate: new Date('Oct 27, 2017'),
				plot: `Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.`
			},
			{
				id: 9,
				name: 'Bad Boys for Life',
				poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg',
				rating: 7.2,
				runTime: 124,
				releaseDate: new Date('Jan 15, 2020'),
				plot: `Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.`
			},
			{
				id: 10,
				name: 'Train to Busan',
				poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/3H1WFCuxyNRP35oiL2qqwhAXxc0.jpg',
				rating: 7.8,
				runTime: 118,
				releaseDate: new Date('Jul 20, 2016'),
				plot: `Martial law is declared when a mysterious viral outbreak pushes Korea into a state of emergency. Those on an express train to Busan, a city that has successfully fended off the viral outbreak, must fight for their own survival`
			},
		];

		for await (const movieData of moviesData) {
			await queryRunner.query(`INSERT INTO movies (${Object.keys(movieData).join(',')}) VALUES (?,?,?,?,?,?,?);`, Object.values(movieData));
		}

		const trailers = [
			{
				movieId: 1,
				link: 'https://www.youtube.com/watch?v=8KtYRALe-xo',
			},
			{
				movieId: 2,
				link: 'https://www.youtube.com/watch?v=ZvtspevZxpg'
			},
			{
				link: 'https://www.youtube.com/watch?v=HKH7_n425Ss',
				movieId: 3
			},
			{
				link: 'https://www.youtube.com/watch?v=JKNv2YfrM7Y',
				movieId: 4
			},
			{
				link: 'https://www.youtube.com/watch?v=T0-uoVFBtv0',
				movieId: 5
			},
			{
				link: 'https://www.youtube.com/watch?v=tY9DnBNJFTI',
				movieId: 5
			},
			{
				link: 'https://www.youtube.com/watch?v=UcjYD91YW_M',
				movieId: 6,
			},
			{
				link: 'https://www.youtube.com/watch?v=iBDmPEuaptM',
				movieId: 7
			},
			{
				link: 'https://www.youtube.com/watch?v=Ga6RYejo6Hk',
				movieId: 8
			},
			{
				link: 'https://www.youtube.com/watch?v=suBMEBxZal8',
				movieId: 8
			},
			{
				link: 'https://www.youtube.com/watch?v=jKCj3XuPG8M',
				movieId: 9
			},
			{
				link: 'https://www.youtube.com/watch?v=A4Uxw9Wlq68',
				movieId: 10
			}
		];

		for await (const trailerData of trailers) {
			await queryRunner.query(`INSERT INTO trailers (${Object.keys(trailerData).join(',')}) VALUES (?,?);`, Object.values(trailerData));
		}
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query('DELETE FROM trailers where movieId < 10');
		await queryRunner.query('DELETE FROM movies where id < 10');
	}
}
