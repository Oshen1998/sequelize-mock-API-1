import { Environments } from "../constants/enums/environments.enum";

class Environment {
    private environment: String;

    constructor(environment: String) {
        this.environment = environment;
    }


    public getPort() {
        switch (this.environment) {
            case Environments.dev_environment:
                return 3001;
            case Environments.prod_environment:
                return 3002;
            case Environments.qa_environment:
                return 3003;
            default:
                return 3001;
        }
    }

    public getDatabaseName(appName: string) {
        switch (this.environment) {
            case Environments.dev_environment:
                return `dev_db_${appName}`;
            case Environments.prod_environment:
                return `prod_db_${appName}`;
            case Environments.qa_environment:
                return `qa_db_${appName}`;
            default:
                return `dev_db_${appName}`;
        }
    }
}

export default new Environment(Environments.local_environment);