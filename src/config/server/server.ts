import express from 'express';
import { Express } from 'express';
import cors from 'cors';
import { config } from './../index';


class Server {

    app: Express;
    port: number | string;
    paths: Object;

    constructor() {
        this.app = express();
        this.port = config.port || 4009;

        this.paths = {
            // example: userPaths: '/users'
        }
    }


    middlewares() {

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    routes() {

        // example: this.app.use(this.paths.userPaths, userRouter);

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

}

export default Server;