import * as express from "express";
import * as bodyParser from "body-parser";
import { AuthRoutes } from "../routes/auth.routes";
import { WillCardRoutes } from "../routes/wild.routes";
import connection from "./../instance/index";


class App {
    public app: express.Application;
    private authRoutes: AuthRoutes = new AuthRoutes();
    private WildCardRoutes: WillCardRoutes = new WillCardRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.DBSetup();
        this.authRoutes.route(this.app);
        this.WildCardRoutes.route(this.app);
    }
    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private DBSetup(): void {
        connection.sync().then(() => {
            console.log("SQL Connected Succesfully!");
        }).catch((error: Error) => {
            console.error(error);
            console.log('Something went wrong with Database!');
        })
    }
}
export default new App().app;