import { Application, Request, Response } from "express";

export class WillCardRoutes {

    public route(app: Application) {
        // All mismatching endpoint handle on here
        app.all('*', (req: Request, res: Response) => {
            res.status(404).json({ message: 'Endpoint Not Found From The App' })
        })
    }
}


