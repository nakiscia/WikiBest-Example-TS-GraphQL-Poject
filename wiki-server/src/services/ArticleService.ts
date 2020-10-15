import { Article } from "src/dtos/Article";
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
        console.log(response.parse)
        const article:Article = response.parse;
        return article;
    }

}