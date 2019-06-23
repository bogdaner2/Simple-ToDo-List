var path = require('path');

const routes = (app) => {

    app.get('/info', (req, res) => res.send('Simple To Do List. Utilized express, mongoose, socket.io'));
    app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/../views/index.html')));
}

module.exports = routes;