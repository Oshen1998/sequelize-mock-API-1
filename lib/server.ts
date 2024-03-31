import { config } from "dotenv";
import app from "./config/app";
import env from './environment/index';

const PORT = env.getPort();

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})