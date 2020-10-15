import { ObjectType,Field } from "type-graphql";

@ObjectType()
export class Category{
    @Field()
    category:String;
    @Field({defaultValue : false})
    hidden: Boolean;
    @Field()
    sortkey: String; 
}