function expressFunction() {

    // Creating Server
    const express = require('express');
    const path = require('path');
    const app = express();
    const PORT = 8080;

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    
    // Attaching main.html to server webpage
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/templates/main.html')));

    // Server Listener
    app.listen(PORT, () => console.log(`App listening on localhost:${PORT}`));

}

module.exports = expressFunction;