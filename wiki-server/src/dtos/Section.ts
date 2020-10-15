import { ObjectType,Field } from "type-graphql";

@ObjectType()
export class Section{
    @Field()
    line:String;
    @Field()
    level: Number;
}