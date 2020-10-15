import {APIHelper} from './APIHelper';
import {URLS} from '../enums'

export class WikipediaMainAPIHelper extends APIHelper{

    public constructor(){
        super(URLS.WIKIPEDIA_MAIN_API_URL);
    }

    public doGetRequestWithParms = async(params: any)=>{
        const endPoint:string = await this.buildParams(params);
        let response : any = await this.instance.get<any>(endPoint);
        return response;
    }

    private buildParams = async(params: any):Promise<string> =>
    {
        const keys = Object.keys(params);
        let queryString : string = "/api.php?";
        
        keys.map((key:string,index:number)=>{
            queryString += `${key}=${params[key]}`;
            if(index != keys.length-1)
                queryString += "&";
        })
        console.log(queryString);
        return queryString;
    }

}