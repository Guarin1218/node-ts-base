import express from 'express';
import { Express } from 'express';
import cors from 'cors';
import config from '../../../config/environment';

class Server {

    app: Express;
    port: number | string;

    constructor() {
        this.app = express();
        this.port = config.port || 4009;
    }


    middlewares() {

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    routes() { }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

}

export default Server;