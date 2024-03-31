import { Request, Response } from "express";
import { ArticleService } from "./../services/article.service";
import { Article } from "./../constants/types/article.types";
import { BadRequestResponse, SuccessResponse, UnProcessableEntityResponse } from "./../constants/common/response.common";

export class ArticleController {
    private articleService: ArticleService = new ArticleService();


    public addArticleToList(req: Request, res: Response) {
        const body = req.body as Article;
        if (body.content && body.name) {

            this.articleService.createArticle(body, (data, err) => {
                if (data && !err) {
                    SuccessResponse(res, data, "Article Added Succesfully!")
                } else {
                    BadRequestResponse(res, `Something went wrong with when adding an article`, err);
                }
            })

        } else {
            UnProcessableEntityResponse(res, "Missing Required Params!");
        }
    }
}