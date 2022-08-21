# [rest-api-init](https://www.npmjs.com/package/rest-api-init)

Fastest way to create REST API with [Node.js](https://nodejs.org/en/), [Express.js](https://expressjs.com/) & [MongoDB](https://www.mongodb.com/).

# Prerequisites

- [Node.js](https://nodejs.org/en/) needs to be installed.
- [MongoDB Compass](https://www.mongodb.com/try/download/compass) needs to be installed only if you are running this api as it is. If you are using the MongoDB cloud database then just change the `DATABASE_URI` in `index.js`.

# Installation

- Run `npx rest-api-init`.
- When prompted to install `rest-api-init` package, enter `y`
- On completion, open terminal inside the root directory and run `npm start`
- Open `localhost:5000` on your browser to view the text `Your server is ready!`

# Features

- Fastest way to create a REST API
- Uses ES6 syntax
- Predefined template for [express routes](https://expressjs.com/en/guide/routing.html) and [mongoose model](https://mongoosejs.com/docs/models.html).

# Configuration

- `index.js` initializes the REST API
  - `PORT` defines the port in which the server will run. The URL will look like this <br> `localhost:<PORT>`
  - `DATABASE_URI` is configured for local database by default which needs [MongoDB Compass](https://www.mongodb.com/try/download/compass) to be installed.
- `routes/routes.js` will contain the routes e.g. `get/post/patch/put/delete`
- `models/model.js` will have the Schema defined for the database

Preferably define `PORT` and `DATABASE_URI` in a `.env` file.
