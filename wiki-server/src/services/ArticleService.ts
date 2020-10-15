import { Article } from "src/dtos/Article";
import { ArticleSearchItem } from "src/dtos/ArticleSearchItem";
import { WikipediaMainAPIHelper } from "../helpers/WikipediaMainAPIHelper";

export class ArticleService{

    //private _categoryService : any;
    private _wikipediaMainAPIHelper : WikipediaMainAPIHelper;

    public constructor(){
        this._wikipediaMainAPIHelper = new WikipediaMainAPIHelper();
    }

    public getArticleById = async(pageid:Number):Promise<Article> =>{
    
        const requestParms : Object = {
            "action":"parse",
            "format":"json",
            "formatversion":"2",
            "pageid":pageid
        }

        const response : any = await this._wikipediaMainAPIHelper.doGetRequestWithParms(requestParms);
        const article:Article = response.parse;
        return article;
    }

    public searchArticleByTitle= async(title:String) : Promise<ArticleSearchItem[]> =>{

        const requestParms : Object = {
            "action": "query",
            "format": "json",
             "list": "search",
             "utf8": 1,
             "srsearch": title.replace(' ',"%20")
        }

        const response : any = await this._wikipediaMainAPIHelper.doGetRequestWithParms(requestParms);
        const searchResult : [ArticleSearchItem] = response.query.search;
        return searchResult;
    }

}