import React from 'react';
import InputField from '../components/InputFiled';
import Wrapper from '../components/Wrapper';
import {useQuery} from 'urql';
import {SearchResult} from '../types/SearhResult';
import Page from '../components/Page';

interface searchProps{}

const SEARCH_QUERY = 
`query Search($title:String!){
  searchArticles(title:$title){
    title
    pageid
    size
  }
}`;

const Home: React.FC<searchProps> = ({}) =>{
    const [title,setTitle] = React.useState("");
    const [pageid,setPageId] = React.useState(0);
    const [resp,search] = useQuery({query: SEARCH_QUERY,variables:{title}});
    let searchResult : SearchResult
    if(!resp.fetching && resp.data)
    {
        searchResult = resp.data.searchArticles[0];
        console.log(searchResult);
    }

    return (
      <Wrapper>
              <InputField
                name="title"
                placeholder="Article Title"
                onChange={async e => {
                  setTitle(e.currentTarget.value);
                }}        
              />

              <Page pageid={searchResult ? searchResult.pageid : 0 } fetching={resp.fetching} />
      </Wrapper>
    );
}

export default Home;