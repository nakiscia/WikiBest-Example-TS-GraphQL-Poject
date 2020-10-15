import { FormControl,Input } from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import InputField from '../components/InputFiled';
import Wrapper from '../components/Wrapper';

interface searchProps{

}

const Home: React.FC<searchProps> = ({}) =>{

    return (
      <Wrapper>
<Formik
    initialValues={{}}
    onSubmit={values => {}}
    render={({ isSubmitting, handleChange }) =>
      <Form>
        <InputField
          name="title"
          placeholder="Article Title"
          onChange={e => {
            handleChange(e)
            console.log(e.currentTarget.value)
          }}        
        />
      </Form>}
  />
      </Wrapper>
    );
}

export default Home;