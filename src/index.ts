import Server from './server';

const server = new Server();

server.start(() => {
	console.log(`Running on ${server.port}`);
});
