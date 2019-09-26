import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.mongo();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  mongo() {
    this.mongoConnection = mongoose.connect('mongodb+srv://wellyngton_borges@hotmail.com:yerm0506*@cluster0-nfxwv.mongodb.net/test?retryWrites=true&w=majority',
      { useNewUrlParser: true });
  }
}

export default new App().server;
