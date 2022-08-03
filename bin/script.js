#! /usr/bin/env node
import { mkdirSync, writeFileSync } from "fs";
import path from 'path';
import { exec } from "node:child_process";

const __dirname = path.resolve();

const routes = `
import express from 'express';

// importing model
import Model from '../models/model.js';

// initialize router
const router = express.Router();

// routes
// get
router.get('/', async (req, res) => {
    res.send('Your server is ready!');
});

// post
router.post('/', async (req, res) => {

});


// patch
router.patch('/', async (req, res) => {

});

// put
router.put('/', async (req, res) => {

});

// delete
router.delete('/', async (req, res) => {

});


export default router;
`;

const model = `
// dependencies
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    // define Schema here
})

// export the created Schema
const Model = mongoose.model('Schema', schema);

export default Model;
`;

const indexjs = `
// constants
const PORT = 5000;
const DATABASE_URI = "mongodb://localhost:27017";

// dependencies
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes.js';

// create connection to database
mongoose.connect(DATABASE_URI);
const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('connected', () => console.log('Connected to Database'));

// initiating the rest api
const app = express();

// middlewares
app.use(express.json());

// initialize routes
app.use('/', routes);

// starting our server
app.listen(PORT, () => {
    console.log(\`Server running on port: \${PORT}\`);
})
`;

const packageJSON = {
    "name": "rest-api",
    "version": "1.0.1",
    "description": "REST API Template",
    "main": "index.js",
    "type": "module",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "nodemon index.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "express": "^4.18.1",
        "mongoose": "^6.5.0"
    },
    "devDependencies": {
        "nodemon": "^2.0.19"
    }
}

try {
    // creating routes
    const routesFolderPath = path.join(__dirname, 'routes');
    mkdirSync(routesFolderPath, function(err) {
        if (err) throw err;
        console.log('directory: routes created');
    });
    const routesFilePath = path.join(routesFolderPath, 'routes.js');
    writeFileSync(routesFilePath, routes, function(err) {
        if (err) throw err;
        console.log('routes.js created');
    });

    // creating model
    const modelFolderPath = path.join(__dirname, 'models');
    mkdirSync(modelFolderPath, function(err) {
        if (err) throw err;
        console.log('directory: models created');
    });
    const modelFilePath = path.join(modelFolderPath, 'model.js');
    writeFileSync(modelFilePath, model, function(err) {
        if (err) throw err;
        console.log('model.js created');
    });

    // creating index.js
    writeFileSync(path.join(__dirname, 'index.js'), indexjs, function(err) {
        if (err) throw err;
        console.log('index.js created');
    });

    // creating package.json
    writeFileSync(path.join(__dirname, 'package.json'), JSON.stringify(packageJSON, null, 4), function(err) {
        if (err) throw err;
    });

    exec('npm install');

} catch (error) {
    console.log(error);
}