import express from 'express';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import mongoConfig from './app/Config/mongodb';
import * as swaggerDoc from './swagger.json';

class App {
    constructor() {
        this.server = express();
        this.subpath = express();
        this.middlewares();
        this.routes();
        this.mongo();
        this.Swagger();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }

    mongo() {
        this.mongoConnection = mongoose.connect(
            mongoConfig.urlConnection,
            mongoConfig.param
        );
    }

    Swagger() {
        this.server.use(
            '/swagger',
            swaggerUi.serve,
            swaggerUi.setup(swaggerDoc)
        );
    }
}

export default new App().server;
