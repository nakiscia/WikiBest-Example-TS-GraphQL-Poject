import { FormControl,Input } from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import InputField from '../components/InputFiled';
import Wrapper from '../components/Wrapper';
import {useQuery} from 'urql'


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
    const [resp,search] = useQuery({query: SEARCH_QUERY});
    console.log(resp);
    return (
      <Wrapper>
          <Formik
          initialValues={{title:""}}
          onSubmit={values => {}}
          render={({ isSubmitting, handleChange }) =>
            <Form>
              <InputField
                name="title"
                placeholder="Article Title"
                onChange={e => {
                  handleChange(e)
                  console.log(e.currentTarget.value);
                  search({title:e.currentTarget.value});
                }}        
              />
            </Form>}
        />
      </Wrapper>
    );
}

export default Home;