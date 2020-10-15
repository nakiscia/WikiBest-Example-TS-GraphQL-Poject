import {ObjectType,Field} from 'type-graphql';
import { Category } from './Category';
import { Section } from './Section';

@ObjectType()
export class Article{
    @Field()
    pageid:Number;
    @Field()
    title:String;
    @Field()
    text:String;
    @Field(()=>[Category])
    categories: [Category];
    @Field(()=>[Section])
    sections : [Section]
}