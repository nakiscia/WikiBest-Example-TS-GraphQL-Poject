import {Section} from '../types/Section';
import {Category} from '../types/Category';

export type PageItem = {
    pageid:Number;
    title:String;
    sections:Section[];
    categories:Category[];
}