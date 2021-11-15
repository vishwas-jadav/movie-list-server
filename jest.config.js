module.exports = {
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
