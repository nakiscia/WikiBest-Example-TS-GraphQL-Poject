import { Article } from "../dtos/Article";
import {ArticleSearchItem} from "../dtos/ArticleSearchItem";
import {Resolver,Query, Arg, Int} from "type-graphql"
import {ArticleService} from '../services/ArticleService';

@Resolver()
export class ArticleResolver{

    private _articleService : ArticleService;

    public constructor(){
        this._articleService = new ArticleService();
    }

    @Query(()=>Article)
    async getArticleByPageId(@Arg("pageid",()=>Int) pageid:Number) : Promise<Article | null>{
        const article: Article = await this._articleService.getArticleById(pageid);
        return article;
    }

    @Query(()=>[ArticleSearchItem])
    async searchArticles(@Arg('title',()=>String) title:String):Promise<ArticleSearchItem[]>{
        const searchResult : ArticleSearchItem[] = await this._articleService.searchArticleByTitle(title);
        return searchResult;
    }
}