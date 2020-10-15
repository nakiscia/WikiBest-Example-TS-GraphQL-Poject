import React from 'react';
import {Box,Text,List,ListItem,Divider,CircularProgress,Flex} from '@chakra-ui/core'
import {useQuery} from 'urql';
import {PageItem} from '../types/PageItem';


interface pageProps{
    pageid : Number,
    fetching: Boolean
}

const PAGE_QUERY = 
`query Page($pageid:Int!){
    getArticleByPageId(pageid:$pageid)
    {pageid,title,text,sections{line},categories{category,hidden}}
  }`;

const Wrapper: React.FC<pageProps> = ({pageid,fetching}) =>{
    const [resp,search] = useQuery({query: PAGE_QUERY,variables:{pageid}});
    let pageItem : PageItem;
    if(!resp.fetching && resp.data)
    {
        pageItem = resp.data.getArticleByPageId;
    }

    console.log(pageItem);

    return (
        pageItem ? 
        <Box>
            <Text mb={5} fontSize="6xl">{pageItem.title}</Text>
            <Text mb={1} pb={1} fontSize="2xl">Table of Contents: : </Text>
            <List styleType="disc">
                {pageItem.sections.map((item,index) => <ListItem>{item.line}</ListItem>)}
            </List>
            <Divider />
            <Text fontSize="2xl">Categories :</Text>
            <List styleType="disc">
            {pageItem.categories.map((item,index) => {
                if(!item.hidden)
                    return <ListItem key={item.category}>{item.category.replaceAll("_"," ")}</ListItem>
            })}
            </List>
        </Box>: fetching || resp.fetching ? <Box h={600} alignItems="center" alignContent="center" w="100%" mt={50}>
            <CircularProgress w="100%" verticalAlign="center" m="auto" 
                justifyContent="center" 
                alignContent="center"
                alignItems="center"
                alignSelf="center"
                isIndeterminate color="black">
            </CircularProgress>
        </Box> : null
    );
}

export default Wrapper;