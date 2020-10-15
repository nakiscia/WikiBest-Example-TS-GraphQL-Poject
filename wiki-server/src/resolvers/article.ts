import { Article } from "../dtos/Article";
import {Resolver,Query} from "type-graphql"
import {ArticleService} from '../services/ArticleService';

@Resolver()
export class ArticleResolver{

    private _articleService : ArticleService;

    public constructor(){
        this._articleService = new ArticleService();
    }

    @Query(()=>Article)
    async getArticleByPageId(){
        const article: Article = await this._articleService.getArticleById(16720735);
        return article;
    }


    async searchArticles(){
        
    }
}