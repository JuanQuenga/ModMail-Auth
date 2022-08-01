module.exports = function ({ webserver, config }) {
	webserver.use('/logs', (req, res) => {
		console.log('Middleware for /logs...');
	})
};
