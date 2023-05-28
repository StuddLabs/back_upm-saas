import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from '../router';

class App {
    app = express();
    constructor() {
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors())

        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
            next();
        });
    };

    routes() {
        this.app.use(routes);
    };
};

const app = new App().app;

export default app;
