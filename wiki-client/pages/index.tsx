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
                  useQuery({query: SEARCH_QUERY,variables:{title:e.currentTarget}});
                }}        
              />
            </Form>}
        />
      </Wrapper>
    );
}

export default Home;