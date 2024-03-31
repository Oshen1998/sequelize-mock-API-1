import { NextFunction, Request } from "express";
import { Article } from "./../constants/types/article.types";
import { Articles } from "./../models/article.models";

export class ArticleService {

    public async createArticle(article: Article, callback: (data: Articles, err?: any) => void) {
        await Articles.create({ ...article }).then((value) => {
            return callback(value, false);
        }).catch((error) => {
            return callback({} as Articles, error);
        })

    }
}