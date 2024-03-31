import { ArticleController } from './../controllers/articles.controller';
import { Application, Request, Response } from 'express';

export class AuthRoutes {
    private articleController: ArticleController = new ArticleController();

    public route(app: Application) {


        app.get('/init', (req: Request, res: Response) => {
            res.status(200).json({ message: 'Get route works fine.' })
        });

        app.post('/init', (req: Request, res: Response) => {
            res.status(200).json({ message: 'Post route works fine.' })
        })

        app.post('/add', (req: Request, res: Response) => {
            this.articleController.addArticleToList(req, res);
        })
    }
}