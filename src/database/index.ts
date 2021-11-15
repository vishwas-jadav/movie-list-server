import Container from 'typedi';
import { createConnection, Connection, useContainer, getConnection } from 'typeorm';

export const createDbConnection = async (): Promise<Connection> => {
	useContainer(Container);
	return await createConnection().catch((err: Error) => {
		console.log('😎 ~ file: database/index.ts ~ line 16 ~ err', err);
		throw err.message;
	});
};

export const stopDatabaseConnection = async () => {
	await getConnection().close();
}
