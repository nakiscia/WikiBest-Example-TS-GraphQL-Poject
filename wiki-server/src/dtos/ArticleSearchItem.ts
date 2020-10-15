import {ObjectType,Field} from 'type-graphql';

@ObjectType()
export class ArticleSearchItem{
    @Field()
    pageid:Number;
    @Field()
    title:String;
    @Field(()=>Number)
    size:Number;
}